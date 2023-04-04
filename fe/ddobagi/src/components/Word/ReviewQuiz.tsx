import React, { useState, useEffect } from "react";
import axios from "axios";
// import quizdata3 from "./quizdata3.json"
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import { Typography } from "@mui/joy";

interface QuizProps {
  userId: number;
  situationId: number;
  quizId: number;
  onNextQuiz: () => void;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Lang {
  [key: string]: {
    transContent: string;
  };
}

interface QuizData {
  beforeSentence: string;
  afterSentence: string;
  answer: string;
  option1: string;
  option2: string;
  option3: string;
  defaultContent: string;
  lang: Lang;
  nowCorrected: boolean;
  firstCorrected: boolean;
  solved: boolean;
}

const ReviewQuiz: React.FC<QuizProps> = ({ userId, situationId, quizId, onNextQuiz, setIsCorrect, setIsWrong }) => {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //

  const [selectedOption, setSelectedOption] = useState("");
  const [quizData, setQuizData] = useState<QuizData>();
  const [options, setOptions] = useState<string[]>([]);
  // const [quizIndex, setQuizIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(userId)
  // console.log(situationId)
  // console.log(quizId)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
      const response = await axios.get(`https://j8a608.p.ssafy.io/api/quizzes/${userId}/question/${quizId}/`);
      setQuizData(response.data);
      // options와 answer를 합침
      const arr = [response.data.option1, response.data.option2, response.data.option3, response.data.answer];
      // 합쳐진 배열을 무작위로 섞음
      arr.sort(() => Math.random() - 0.5);
      setOptions(arr);
      setQuizData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [userId, quizId]);

  if (!quizData) {
    return <div>Loading...</div>;
  }

  // console.log(quizData)
  // console.log(options)
  // console.log(userId)
  // console.log(quizId)

  // const quizData = quizdata3
  const CorrectWord = () => {
    axios({
      url: `https://j8a608.p.ssafy.io/api/quizzes/${userId}/${quizId}`,
      method: "POST",
      // withCredentials: true,
      data: {
        corrected : "true"
      },
      // headers: {
      //   // "Content-Type": "application/json",
      //   Authorization: `Bearer ${accessToken}`,
      // },
    })
      .then(() => {
        console.log("정답이 보내져썽")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const WrongWord = () => {
    axios({
      url: `https://j8a608.p.ssafy.io/api/quizzes/${userId}/${quizId}`,
      method: "POST",
      // withCredentials: true,
      data: {
        corrected : false
      },
      // headers: {
      //   // "Content-Type": "application/json",
      //   Authorization: `Bearer ${accessToken}`,
      // },
    })
      .then(() => {
        console.log("잘못된 오답이야")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  console.log(selectedOption)

  const handleAnswerCheck = () => {
    if (selectedOption === quizData?.answer) {
      // alert("정답입니다!");
      setIsCorrect(true);
      CorrectWord()
      // setQuizIndex(quizIndex + 1); // 다음 퀴즈로 이동
      onNextQuiz(); // 다음 퀴즈로 이동
    } else {
      // alert("오답입니다!");
      setIsWrong(true);
      WrongWord()
    }
  };

  // const handleClose = () => {
  //   setIsCorrect(false);
  //   setIsWrong(false);
  //   setSelectedOption("");
  //   onNextQuiz();
  // };

  // if (!quizData) {
  //   return <div>Loading...</div>;
  // }
  if (isLoading || !quizData) {
    return <div>Loading...</div>;
  }

  // 빈칸 박스 option1 - 그냥 ____ 밑줄
  const question = `${quizData.beforeSentence} ________ ${quizData.afterSentence}`;

  const translation = () => {
    if (language === "CN") {
      return quizData.lang.CN.transContent
    } else if (language === 'VI') {
      return quizData.lang.VI.transContent
    } 
  }

  // const options = [quizData.option1, quizData.option2, quizData.option3];

  // console.log(quizData.solved)
  // console.log(quizData.firstCorrected)
  // console.log(quizData.nowCorrected)

  return (
    <div>
      <Typography
        sx={{
          fontSize : "40px",
          fontFamily: "CookieRun-Regular",
        }}
      > 
        {question}
      </Typography>
      <h2>{translation()}</h2>
      <ul>
        {options.map((option) => (
          <Button 
            variant="contained" 
            key={option} 
            onClick={() => handleOptionClick(option)} 
            sx={{ 
              margin: "30px",
              width: "150px",
              height : "80px",
              fontSize : "25px",
              fontFamily: "CookieRun-Regular",
              border:
                selectedOption === option ? "8px solid blue" : "1px solid black",
              }}>
            {option}
          </Button>
        ))}
      </ul>
      <button onClick={handleAnswerCheck} style={{ width:"100px", height:"70px", borderRadius:"10px", fontSize: "20px", fontFamily: "CookieRun-Regular", }} >정답 확인</button>

    </div>
  );
};

export default ReviewQuiz;
