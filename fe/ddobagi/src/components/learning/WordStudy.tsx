import React from "react";
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
import SkipNextIcon from '@mui/icons-material/SkipNext';


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

function WordStudy() {
  const location = useLocation();
  const categoryName = location.state?.categoryName;
  const situationTitle = location.state?.situationTitle;
  const color = location.state?.color;
  const situationId = location.state?.situationId;
  const userId = useSelector(
    (state: RootState) => state.inputUserInfo.payload.id
  );

  console.log(categoryName)
  console.log(situationTitle)
  console.log(color)
  console.log(situationId)
  console.log(userId)
  
  const [quizIdData, setQuizIdData] = useState<number[]>([]);
  const [quizData, setQuizData] = useState<QuizData>();
  const [quizIndex, setQuizIndex] = useState<number>(0);

  // 정답 오답 모달 관련
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  //
  console.log(isCorrect)
  console.log(isWrong)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://j8a608.p.ssafy.io:8080/api/learnings/${situationId}`);
      setQuizIdData(response.data);
    };
    fetchData();
  }, [situationId]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://j8a608.p.ssafy.io:8080/api/quizzes/${userId}/question/${quizIdData[quizIndex]}/`);
      setQuizData(response.data);
    };
    fetchData();
  }, [userId, quizIdData, quizIndex]);

  const navigate = useNavigate();

  const handleQuizSubmit = () => {
    if (quizIndex < quizIdData.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      navigate("/CategoryList");
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
      <div style={{ marginTop : "30px", }}>
        <img src={"/img/notebook.png"} alt="notebook" style={{ width: "1000px", marginTop:"50px", }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", marginTop:"70px" }}>
          {/* <div className={styles.scores}> */}
          <div style={{ display:"flex", float:"right", paddingBottom:"20px", fontSize: "22px" }}>
            {quizIndex+1} / {quizIdData.length}
          </div>
          <div style={{
            marginTop:"60px"
          }}>
            <Quiz 
              userId={userId}
              situationId={situationId}
              quizId={quizIdData[quizIndex]}
              onNextQuiz={handleQuizSubmit}
              setIsCorrect={setIsCorrect} // React.Dispatch<React.SetStateAction<boolean>>
              setIsWrong={setIsWrong} // React.Dispatch<React.SetStateAction<boolean>>
            />

          </div>
        </div>
      </div>
      <Box display="flex" justifyContent="center" mt={5}>
        <Button
          onClick={handleQuizSubmit} 
          sx={{ 
            mr: 2,
            width: "180px",
            color: "#ffffff",
            backgroundColor: "#6BCB77",
            borderRadius: 10,
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
          startIcon={<SkipNextIcon sx={{ width: "38px", height: "35px", color:"white" }} />}
          >
          {quizIndex === quizIdData.length - 1 ? "학습 완료" : "다음 문제"}
        </Button>
        {/* <Button onClick={() => navigate("/CategoryList")}>학습 종료</Button> */}
        <WordCloseBtn width="180px"/>
      </Box>
      <Box sx={{ height: "100px" }} />

      {/* correct modal */}
      {isCorrect && (
        <div className="modal" 
        style={{ position: "fixed",
          top: "33%",
          left: "33%",
          width: "33%",
          height: "50%",
          backgroundColor: "white",
          borderRadius:"20px",
          border : "2px solid black"
          }}>
          <div className="modal-content" 
            style={{ 
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)" }}>
            <CorrectAnimation />
            <Typography
              sx= {{
                fontSize:"30px",
                fontFamily: "CookieRun-Regular",
              }}
            >
              정답입니다!
            </Typography>
            <Box sx={{ height: "20px" }} />
            <Button sx={{ 
                width:"100px",
                borderRadius : "10px",
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
              }}    onClick={handleClose}>확인</Button>
          </div>
        </div>
      )}

      {/* wrong modal */}
      {isWrong && (
        <div className="modal" 
        style={{ position: "fixed",
          top: "33%",
          left: "33%",
          width: "33%",
          height: "50%",
          backgroundColor: "white",
          borderRadius:"20px",
          border : "2px solid black"
          }}>
          <div className="modal-content" 
            style={{ 
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)" }}>
            <WrongAnimation />
            <Typography
              sx= {{
                fontSize:"30px",
                fontFamily: "CookieRun-Regular",
              }}
            >
              오답입니다!
            </Typography>
            <Box sx={{ height: "20px" }} />
            <Button 
              sx={{ 
                width:"100px",
                borderRadius : "10px",
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
              onClick={handleClose}>확인</Button>
          </div>
        </div>
      )}

    </div>
  );
}


export default WordStudy;
