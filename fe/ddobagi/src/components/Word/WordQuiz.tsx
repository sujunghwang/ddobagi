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

const Quiz: React.FC<QuizProps> = ({ userId, situationId, quizId, onNextQuiz }) => {
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

  console.log(userId)
  console.log(situationId)
  console.log(quizId)

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

  console.log(quizData)
  console.log(options)

  // const quizData = quizdata3


  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  console.log(selectedOption)

  const handleAnswerCheck = () => {
    if (selectedOption === quizData?.answer) {
      alert("정답입니다!");
      // setQuizIndex(quizIndex + 1); // 다음 퀴즈로 이동
      onNextQuiz(); // 다음 퀴즈로 이동
    } else {
      alert("오답입니다!");
    }
  };

  // if (!quizData) {
  //   return <div>Loading...</div>;
  // }
  if (isLoading || !quizData) {
    return <div>Loading...</div>;
  }

  // 빈칸 박스 option1 - 그냥 ____ 밑줄
  const question = `${quizData.beforeSentence} ________ ${quizData.afterSentence}`;

  // 빈칸 박스 option2 - 글자수 알려주는 박스
  // const question = `${quizData.beforeSentence} ${
  //   quizData.defaultContent
  //     ? "[" + quizData.defaultContent.length + "글자]" // defaultContent가 있으면 글자수 표시
  //     : "_______"
  // } ${quizData.afterSentence}`;

  // 빈칸 박스 option3 - 네모 박스
  // const blanks = quizData.beforeSentence.match(/___+/g) || [];
  // const blankBoxes = blanks.map((blank, i) => (
  //   <span
  //     key={i}
  //     style={{
  //       display: "inline-block",
  //       minWidth: "1em",
  //       border: "1px solid #ccc",
  //       margin: "0 0.2em",
  //       textAlign: "center",
  //       borderRadius: "3px",
  //       padding: "0.1em 0.5em",
  //     }}
  //   ></span>
  // ));
  // const question = (
  //   <>
  //     {quizData.beforeSentence.split("___").map((text, i) => (
  //       <React.Fragment key={i}>
  //         {text}
  //         {i < blankBoxes.length && blankBoxes[i]}
  //       </React.Fragment>
  //     ))}
  //     {quizData.afterSentence}
  //   </>
  // );

  const translation = () => {
    if (language === "CN") {
      return quizData.lang.CN.transContent
    } else if (language === 'VI') {
      return quizData.lang.VI.transContent
    } 
  }

  // const options = [quizData.option1, quizData.option2, quizData.option3];

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
      <h3>{translation()}</h3>
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

export default Quiz;
