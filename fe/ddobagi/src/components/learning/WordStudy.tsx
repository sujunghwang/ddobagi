import React, { useRef } from "react";
// import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import styles from "./Study.module.scss";
import { Button } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import Quiz from "../Word/WordQuiz";
import WordCloseBtn from "../Word/WordCloseBtn";
import { useState, useEffect } from "react";
import CorrectAnimation from "../animations/Correct";
import WrongAnimation from "../animations/Wrong";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import styles from "./Study.module.scss";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import FinishAnimation from "../animations/Finish";
import StudyAnimation from "../animations/Study";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#e1e1e1",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundImage: "linear-gradient(to right, #74ebd5, #acb6e5)",
  },
}));

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

function WordStudy() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  const location = useLocation();
  const categoryName = location.state?.categoryName;
  const situationTitle = location.state?.situationTitle;
  const color = location.state?.color;
  const situationId = location.state?.situationId;
  const userId = useSelector(
    (state: RootState) => state.inputUserInfo.payload.id
  );

  // console.log(categoryName);
  // console.log(situationTitle);
  // console.log(color);
  // console.log(situationId);
  // console.log(userId);

  const [quizIdData, setQuizIdData] = useState<number[]>([]);
  const [quizData, setQuizData] = useState<QuizData>();
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [videoUrl, setVideoUrl] = useState<string>("");

  // 영상 소리 재생
  // 유튜브 플레이어를 제어하기 위한 객체
  const videoFrame = useRef<YouTubePlayer>();

  // 재생하는 버튼
  const play = (start: number, end: number) => {
    const duration = end - start;
    videoFrame.current.seekTo(start);
    videoFrame.current.playVideo();
    setTimeout(() => {
      videoFrame.current.pauseVideo();
    }, duration * 1000);
  };

  //영상이 준비되면 ref에 video컨트롤을 위한 데이터를 담음.
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    const player = event.target;
    videoFrame.current = player;
  };

  // 정답 오답 모달 관련
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  //
  // console.log(isCorrect);
  // console.log(isWrong);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://j8a608.p.ssafy.io:8080/api/learnings/${situationId}`
      );
      setQuizIdData(response.data);
    };
    fetchData();
  }, [situationId]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://j8a608.p.ssafy.io:8080/api/quizzes/${userId}/question/${quizIdData[quizIndex]}/`
      );
      setQuizData(response.data);
      setVideoUrl(response.data.videoUrl.split(".be/")[1]);
    };
    fetchData();
  }, [userId, quizIdData, quizIndex]);

  const navigate = useNavigate();

  const getOut = () => {
    setIsFinish(false);
    navigate("/CategoryList");
  };

  const handleQuizSubmit = () => {
    if (quizIndex < quizIdData.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setIsFinish(true);
      // navigate("/CategoryList");
    }
  };

  const handleClose = () => {
    setIsCorrect(false);
    setIsWrong(false);
    setIsFinish(false);
    // setSelectedOption("");
    // onNextQuiz();
  };

  if (!quizData) {
    return <div>Loading...</div>;
  }

  const Percentage = ((quizIndex + 1) / quizIdData.length) * 100;

  return (
    <div>
      <div className={styles.loadAnime}>
        <div
          className={styles.Pin}
          style={{
            marginLeft: `${Percentage}%`,
            transition: "margin .5s ease-in"
          }}
        >
          <img src={"/img/running.gif"} alt="run" style={{ width: "50px" }} />
        </div>
        <div style={{ display: "none" }}>
          <YouTube videoId={videoUrl} onReady={onPlayerReady} />
        </div>
        <BorderLinearProgress
          variant="determinate"
          value={Percentage}
          sx={{
            boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
          }}
        />
        <div
          style={{
            textAlign: "end",
            fontSize: "1.2rem",
            marginTop: ".5rem",
          }}
        >
          {quizIndex + 1} / {quizIdData.length}
        </div>
      </div>
      {/* <Box sx={{ marginTop:"30px", position: "absolute", top: 10, left: 0, m: 2 }}>
        <WordCloseBtn width="280px" />
      </Box> */}
      <div style={{ position: "absolute", left: "75%", top: "50%", zIndex: "-1" }}>
        <StudyAnimation />
      </div>
      <div style={{ marginTop: "30px" }}>
        <img
          src={"/img/notebook.png"}
          alt="notebook"
          style={{ 
            width: "1020px", 
            marginTop: "30px", 
            // boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.2)", 
            borderRadius: "23px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            marginTop: "35px",
          }}
        >
          <div
            style={{
              marginTop: "60px",
            }}
          >
            <Quiz
              userId={userId}
              situationId={situationId}
              quizId={quizIdData[quizIndex]}
              onNextQuiz={handleQuizSubmit}
              setIsCorrect={setIsCorrect} // React.Dispatch<React.SetStateAction<boolean>>
              setIsWrong={setIsWrong} // React.Dispatch<React.SetStateAction<boolean>>
              startTime={quizData.startTime}
              endTime={quizData.endTime}
              videoFrame={videoFrame}
              play={play}
            />
          </div>
        </div>
      </div>
      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          onClick={handleQuizSubmit}
          variant="contained"
          sx={{
            width: "180px",
            color: "#ffffff",
            backgroundColor: "#6BCB77",
            marginRight: "30px",
            borderRadius: 50,
            fontFamily:
              language === "CN"
                ? "JingNanMaiYuanTi"
                : language === "VI"
                  ? "UVNHaiBaTrung"
                  : "MaplestoryOTFLight",
            fontSize: "1.2rem",
            transition: "top .1s ",
            boxShadow: "inset 0 -1px 5px rgba(0, 0, 0, 0.15)",

            "&:hover": {
              backgroundColor: "#6BCB77",
              boxShadow: "inset 0 -4px 5px rgba(0, 0, 0, 0.15)",
            },
          }}
          startIcon={
            <SkipNextIcon
              sx={{ width: "38px", height: "35px", color: "white" }}
            />
          }
        >
          {quizIndex === quizIdData.length - 1 ? language === "CN" ?
            "学习完成" :
            language === "VI" ?
              "học xong" :
              "학습 완료" :
            language === "CN" ?
              "下一个问题" :
              language === "VI" ?
                "vấn đề tiếp theo" :
                "다음 문제"}
        </Button>
        {/* <Button onClick={() => navigate("/CategoryList")}>학습 종료</Button> */}
        <WordCloseBtn width="180px" />
      </Box>
      <Box sx={{ height: "100px" }} />

      {/* correct modal */}
      {isCorrect && (
        <div
          className="modal"
          style={{
            position: "fixed",
            top: "33%",
            left: "33%",
            width: "33%",
            height: "50%",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "2px solid black",
          }}
        >
          <div
            className="modal-content"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CorrectAnimation />
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "CookieRun-Regular",
              }}
            >
              {language === "CN"
              ? "回答正确！"
              : language === "VI"
              ? "Chính xác!"
              : "정답입니다!"}
              {/* 정답입니다! */}
            </Typography>
            <Box sx={{ height: "20px" }} />
            <Button
              sx={{
                width: "100px",
                borderRadius: "10px",
                mr: 2,
                color: "#ffffff",
                backgroundColor: "#6BCB77",
                fontFamily: "CookieRun-Regular",
                fontSize: 20,
                borderColor: "rgba(0, 0, 0, .25)",
                borderWidth: "0px 4px 4px 0px",
                borderStyle: "solid",
                transition: "border-width .1s ",
                "&:hover": {
                  backgroundColor: "#6BCB77",
                  borderWidth: "0px",
                },
                marginX: "15px",
              }}
              onClick={handleClose}
            >
              {language === "CN"
              ? "确认"
              : language === "VI"
              ? "sự xác nhận"
              : "확인"}
              {/* 확인 */}
            </Button>
          </div>
        </div>
      )}

      {/* wrong modal */}
      {isWrong && (
        <div
          className="modal"
          style={{
            position: "fixed",
            top: "33%",
            left: "33%",
            width: "33%",
            height: "50%",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "2px solid black",
          }}
        >
          <div
            className="modal-content"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <WrongAnimation />
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "CookieRun-Regular",
              }}
            >
              {language === "CN"
              ? "答错了！"
              : language === "VI"
              ? "Đáp án sai rồi!"
              : "오답입니다!"}
              {/* 오답입니다! */}
            </Typography>
            <Box sx={{ height: "20px" }} />
            <Button
              sx={{
                width: "100px",
                borderRadius: "10px",
                mr: 2,
                color: "#ffffff",
                backgroundColor: "#6BCB77",
                fontFamily: "CookieRun-Regular",
                fontSize: 20,
                borderColor: "rgba(0, 0, 0, .25)",
                borderWidth: "0px 4px 4px 0px",
                borderStyle: "solid",
                transition: "border-width .1s ",
                "&:hover": {
                  backgroundColor: "#6BCB77",
                  borderWidth: "0px",
                },
                marginX: "15px",
              }}
              onClick={handleClose}
            >
              {language === "CN"
              ? "确认"
              : language === "VI"
              ? "sự xác nhận"
              : "확인"}
              {/* 확인 */}
            </Button>
          </div>
        </div>
      )}

      {/* Finish modal */}
      {isFinish && (
        <div
          className="modal"
          style={{
            position: "fixed",
            top: "33%",
            left: "33%",
            width: "33%",
            height: "50%",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "2px solid black",
          }}
        >
          <div
            className="modal-content"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <FinishAnimation />
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "CookieRun-Regular",
              }}
            >
              {language === "CN"
              ? "所有的题都答完了！"
              : language === "VI"
              ? "Tôi đã giải được tất cả các vấn đề."
              : "모든 문제를 풀었어요!"}
              {/* 모든 문제를 풀었어요! */}
            </Typography>
            <Box sx={{ height: "20px" }} />
            <Button
              sx={{
                width: "100px",
                borderRadius: "10px",
                mr: 2,
                color: "#ffffff",
                backgroundColor: "#6BCB77",
                fontFamily: "CookieRun-Regular",
                fontSize: 20,
                borderColor: "rgba(0, 0, 0, .25)",
                borderWidth: "0px 4px 4px 0px",
                borderStyle: "solid",
                transition: "border-width .1s ",
                "&:hover": {
                  backgroundColor: "#6BCB77",
                  borderWidth: "0px",
                },
                marginX: "15px",
              }}
              onClick={getOut}
            >
              {language === "CN"
              ? "确认"
              : language === "VI"
              ? "sự xác nhận"
              : "확인"}
              {/* 확인 */}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WordStudy;
