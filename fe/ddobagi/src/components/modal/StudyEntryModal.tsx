import React from "react";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import ColorBtn from "../ColorBtn";
import styles from "./Modal.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  closeModal: Function;
  modal: boolean;
  situationTitle: string;
  categoryName: string;
  color: string;
  progress: number;
  situationId: number
};

function StudyEntryModal({
  closeModal,
  modal,
  situationTitle,
  categoryName,
  color,
  progress,
  situationId
}: Props) {
  const exit = () => closeModal();
  const backGroundImgColor =
    color === "#FF6B6B"
      ? "pink"
      : color === "#92B4EC"
        ? "blue"
        : color === "#FFE69A"
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
        situationId: situationId
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
        situationId: situationId
      },
    });
  };

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
            style={{ paddingTop: "10px" }}
          >
            <CloseIcon />
          </div>
          <div className={styles.SContainer}>
            <div className={styles.categoryName}>{categoryName}</div>
            <div className={styles.situationTitle}>{situationTitle}</div>
            <div>애니메이션 두 개</div>
            <div className={styles.BtnGroup}>
              <ColorBtn
                content={"대화 연습"}
                color={"#FFD93D"}
                width={"220px"}
                onClick={() => {
                  navigateToConversation(situationTitle);
                }}
              />
              <ColorBtn
                content={"단어 연습"}
                color={"#FF6B6B"}
                width={"220px"}
                onClick={() => {
                  navigateToWord(situationTitle);
                }}
              />
            </div>
          </div>
        </Box>
      </Slide>
    </Modal>
  );
}

export default StudyEntryModal;
