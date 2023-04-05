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
import ReviewCloseBtn from "../Word/ReviewCloseBtn";
import StudyAnimation from "../animations/Study";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";

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

function ReviewStudy() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
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

  const location = useLocation();
  // const categoryName = location.state?.categoryName;
  // const situationTitle = location.state?.situationTitle;
  // const color = location.state?.color;
  const situationId = location.state?.situationId;
  const userId = useSelector(
    (state: RootState) => state.inputUserInfo.payload.id
  );
  const reviewNum = location.state?.reviewNum;

  // console.log(categoryName)
  // console.log(situationTitle)
  // console.log(color)
  // console.log(situationId)
  console.log(userId);
  console.log(reviewNum);

  // const [quizIdData, setQuizIdData] = useState<number[]>([]);
  const [quizData, setQuizData] = useState<QuizData>();
  const [quizIndex, setQuizIndex] = useState<number>(0);

  // 정답 오답 모달 관련
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  //
  console.log(isCorrect);
  console.log(isWrong);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`https://j8a608.p.ssafy.io/api/learnings/${situationId}`);
  //     setQuizIdData(response.data);
  //   };
  //   fetchData();
  // }, [situationId]);

  // console.log(quizIdData)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://j8a608.p.ssafy.io/api/quizzes/${userId}/question/${reviewNum[quizIndex]}/`
      );
      setQuizData(response.data);
    };
    fetchData();
  }, [userId, reviewNum, quizIndex]);

  const navigate = useNavigate();

  const handleQuizSubmit = () => {
    if (quizIndex < reviewNum.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      navigate("/mypage");
    }
  };

  const handleClose = () => {
    setIsCorrect(false);
    setIsWrong(false);
    // setSelectedOption("");
    // onNextQuiz();
  };

  if (!quizData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
          style={{ width: "1000px", marginTop: "50px", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.2)", borderRadius: "23px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            marginTop: "5px",
          }}
        >
          {/* <div className={styles.scores}> */}
          <div
            style={{
              display: "flex",
              float: "right",
              paddingBottom: "20px",
              fontSize: "22px",
            }}
          >
            {quizIndex + 1} / {reviewNum.length}
          </div>
          <div
            style={{
              marginTop: "60px",
            }}
          >
            <Quiz
              userId={userId}
              situationId={situationId}
              quizId={reviewNum[quizIndex]}
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
      <Box display="flex" justifyContent="center" mt={5}>
        <Button
          onClick={handleQuizSubmit}
          variant="contained"
          sx={{
            width: "180px",
            color: "#ffffff",
            backgroundColor: "#6BCB77",

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
          {quizIndex === reviewNum.length - 1
            ? language === "CN" ?
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
        <ReviewCloseBtn width="180px" />
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
              정답입니다!
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
              확인
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
              오답입니다!
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
              확인
            </Button>
          </div>
        </div>
      )}
      <div>
        <YouTube videoId={quizData.videoUrl} onReady={onPlayerReady} />
      </div>
    </div>
  );
}

export default ReviewStudy;
