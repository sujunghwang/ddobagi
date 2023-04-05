import React from "react";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import ColorBtn from "../ColorBtn";
import styles from "./Modal.module.scss";
import ConversationAnimation from "../animations/Consversation";
import TestAnimation from "../animations/Test";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";

type Props = {
  closeModal: Function;
  modal: boolean;
  situationTitle: string;
  categoryName: string;
  color: string;
  progress: number;
  situationId: number;
};

function StudyEntryModal({
  closeModal,
  modal,
  situationTitle,
  categoryName,
  color,
  progress,
  situationId,
}: Props) {
  const exit = () => closeModal();
  const backGroundImgColor =
    color === "#ffcfd8"
      ? "pink"
      : color === "#e0f1ff"
        ? "blue"
        : color === "#fff9e2"
          ? "yellow"
          : "green";
  const style = {
    position: "absolute" as "absolute",
    width: { xs: "265px", md: "630px" },
    height: { xs: "250px", md: "600px" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: 4,
    backgroundImage: `url(img/${backGroundImgColor}1.png)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  // 네비게이션을 위한 함수들
  const navigate = useNavigate();
  const navigateToConversation = (id: string) => {
    navigate(`/learning/conversation/${id}`, {
      state: {
        categoryName: categoryName,
        situationTitle: situationTitle,
        progress: progress,
        color: color,
        situationId: situationId,
      },
    });
  };
  const navigateToWord = (id: string) => {
    navigate(`/learning/quiz/${id}`, {
      state: {
        categoryName: categoryName,
        situationTitle: situationTitle,
        progress: progress,
        color: color,
        situationId: situationId,
      },
    });
  };

  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );

  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modal}
      onClose={exit}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Slide direction="up" in={modal}>
        <Box sx={style}>
          <img src="img/Hands.png" alt="hands" className={styles.handImg} />
          <div
            onClick={exit}
            className={styles.CloseBtn}
            style={{ paddingTop: "10px", transform: "TranslateX(70%)" }}
          >
            <CloseIcon />
          </div>
          <div className={styles.SContainer}>
            <div className={styles.categoryName}>{categoryName}</div>
            <div className={styles.situationTitle}>{situationTitle}</div>
            <div className={styles.BtnGroup}>
              <div className={styles.Group}>
                <ConversationAnimation />
                <ColorBtn
                  content={language === "CN"
                    ? "会话练习"
                    : language === "VI"
                      ? "thực hành giao tiếp"
                      : "대화 연습"}
                  color={"#FF6B6B"}
                  width={"200px"}
                  onClick={() => {
                    navigateToConversation(situationTitle);
                  }}
                />
              </div>
              <div className={styles.Group}>
                <TestAnimation />
                <ColorBtn
                  content={language === "CN"
                    ? "单词练习"
                    : language === "VI"
                      ? "luyện từ"
                      : "단어 연습"}
                  color={"#FFD93D"}
                  width={"200px"}
                  onClick={() => {
                    navigateToWord(situationTitle);
                  }}
                />
              </div>
            </div>
          </div>
        </Box>
      </Slide>
    </Modal>
  );
}

export default StudyEntryModal;
