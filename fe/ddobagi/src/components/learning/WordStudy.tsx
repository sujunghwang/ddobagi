import React from "react";
// import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import styles from "./Study.module.scss";
import { Button } from "@mui/joy";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import Quiz from "../Word/WordQuiz";
import WordCloseBtn from "../Word/WordCloseBtn";
import { useState, useEffect } from "react";


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

  if (!quizData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Box sx={{ marginTop:"30px", position: "absolute", top: 10, left: 0, m: 2 }}>
        <WordCloseBtn width="280px" />
      </Box>
      <div style={{ marginTop : "30px", }}>
        <img src={"/img/notebook.png"} alt="notebook" style={{ width: "1000px", marginTop:"50px", }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", marginTop:"70px" }}>
          <Quiz 
            userId={userId}
            situationId={situationId}
            quizId={quizIdData[quizIndex]}
            onNextQuiz={handleQuizSubmit}
          />
        </div>
      </div>
      <Box display="flex" justifyContent="center" mt={5}>
        <Button onClick={handleQuizSubmit} sx={{ mr: 2 }}>
          {quizIndex === quizIdData.length - 1 ? "학습 완료" : "다음 문제"}
        </Button>
        <Button onClick={() => navigate("/CategoryList")}>학습 종료</Button>
      </Box>
    </div>
  );
}


export default WordStudy;
