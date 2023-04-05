import React, { useState, useEffect } from "react";
import axios from "axios";
// import quizdata3 from "./quizdata3.json"
import { Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import { Typography } from "@mui/joy";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import styles from "./Quiz.module.scss";
import QuestionBox from "./QuestionBox";

interface QuizProps {
  userId: number;
  situationId: number;
  quizId: number;
  onNextQuiz: () => void;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>;
  startTime: number;
  endTime: number;
  videoFrame: React.MutableRefObject<any>;
  play: (start: number, end: number) => void;
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
  videoUrl: string;
  startTime: number;
  endTime: number;
  lang: Lang;
  nowCorrected: boolean;
  firstCorrected: boolean;
  solved: boolean;
}

const Quiz: React.FC<QuizProps> = ({
  userId,
  situationId,
  quizId,
  onNextQuiz,
  setIsCorrect,
  setIsWrong,
  startTime,
  endTime,
  videoFrame,
  play,
}) => {
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
  const [onPlay, setOnPlay] = useState<boolean>(false);

  // console.log(userId)
  // console.log(situationId)
  // console.log(quizId)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://j8a608.p.ssafy.io/api/quizzes/${userId}/question/${quizId}/`
        );
        setQuizData(response.data);
        // options와 answer를 합침
        const arr = [
          response.data.option1,
          response.data.option2,
          response.data.option3,
          response.data.answer,
        ];
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
        corrected: "true",
      },
      // headers: {
      //   // "Content-Type": "application/json",
      //   Authorization: `Bearer ${accessToken}`,
      // },
    })
      .then(() => {
        console.log("정답이 보내져썽");
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
        corrected: false,
      },
      // headers: {
      //   // "Content-Type": "application/json",
      //   Authorization: `Bearer ${accessToken}`,
      // },
    })
      .then(() => {
        console.log("잘못된 오답이야");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  console.log(selectedOption);

  const handleAnswerCheck = () => {
    if (selectedOption === quizData?.answer) {
      // alert("정답입니다!");
      setIsCorrect(true);
      CorrectWord();
      // setQuizIndex(quizIndex + 1); // 다음 퀴즈로 이동
      onNextQuiz(); // 다음 퀴즈로 이동
    } else {
      // alert("오답입니다!");
      setIsWrong(true);
      WrongWord();
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
  // const question = `${quizData.beforeSentence} ________ ${quizData.afterSentence}`;

  const translation = () => {
    if (language === "CN") {
      return quizData.lang.CN.transContent;
    } else if (language === "VI") {
      return quizData.lang.VI.transContent;
    }
  };

  const BtnColor = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* {onPlay ? (
        <div
          className={styles.RBtn}
          onClick={() => {
            videoFrame.current.pauseVideo();
            setOnPlay(false);
          }}
        >
          <PauseRoundedIcon sx={{ fontSize: "2rem" }} />
        </div>
      ) : (
        <div
          className={styles.RBtn}
          onClick={() => {
            play(startTime, endTime);
            setOnPlay(true);
            const duration = endTime - startTime;
            setTimeout(() => {
              setOnPlay(false);
            }, duration * 1000);
          }}
        >
          <PlayArrowRoundedIcon sx={{ fontSize: "2rem" }} />
        </div>
      )} */}
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography sx={{ fontSize: "40px", fontFamily: "CookieRun-Regular" }}>
          {quizData.beforeSentence}
        </Typography>
        <Box width={20} />
        <QuestionBox />
        <Box width={20} />
        <Typography sx={{ fontSize: "40px", fontFamily: "CookieRun-Regular" }}>
          {quizData.afterSentence}
        </Typography>
        <div // 재생버튼 있는 위치
        style={{
          marginTop:"30px",
          marginLeft:"25PX",
        }}
        >
          {onPlay ? (
          <div
            className={styles.RBtn}
            onClick={() => {
              videoFrame.current.pauseVideo();
              setOnPlay(false);
            }}
          >
            <PauseRoundedIcon sx={{ fontSize: "2rem" }} />
          </div>
        ) : (
          <div
            className={styles.RBtn}
            onClick={() => {
              play(startTime, endTime);
              setOnPlay(true);
              const duration = endTime - startTime;
              setTimeout(() => {
                setOnPlay(false);
              }, duration * 1000);
            }}
          >
            <PlayArrowRoundedIcon sx={{ fontSize: "2rem" }} />
          </div>
        )}
        </div>
      </Box>
      <h2 style={{
        fontFamily:
          language === "CN"
            ? "JingNanMaiYuanTi"
            : language === "VI"
              ? "UVNHaiBaTrung"
              : "MaplestoryOTFLight",
      }}>{translation()}</h2>
      <ul>
        {options.map((option) => (
          <Button
            variant="contained"
            key={option}
            onClick={() => handleOptionClick(option)}
            sx={{
              margin: "30px",
              width: "150px",
              height: "80px",
              fontSize: "25px",
              fontFamily: "CookieRun-Regular",
              border:
                selectedOption === option
                  ? "8px solid blue"
                  : "1px solid black",
            }}
          >
            {option}
          </Button>
        ))}
      </ul>
      <Button
        variant="contained"
        onClick={handleAnswerCheck}
        sx={{
          width: "120px",
          height: "70px",
          borderRadius: "10px",
          fontSize: "20px",
          fontFamily:
            language === "CN"
              ? "JingNanMaiYuanTi"
              : language === "VI"
                ? "UVNHaiBaTrung"
                : "MaplestoryOTFLight",
          cursor: "pointer",
          backgroundColor: "#FFD93D",
          color: "black",
          marginTop: "20px",
        }}
      >
        {language === "CN"
          ? "检查答案"
          : language === "VI"
            ? "Kiểm tra câu trả lời"
            : "정답 확인"}      </Button>
    </div>
  );
};

export default Quiz;
