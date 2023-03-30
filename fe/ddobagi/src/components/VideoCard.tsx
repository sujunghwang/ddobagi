import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import StudyEntryModal from "./modal/StudyEntryModal";
import styles from "./VideoScroll.module.scss";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: "10px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: "10px",
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

type CardProp = {
  situationThumbnail: string;
  progress: number;
  situationTitle: string;
  situationId: number;
  isCompleted: boolean;
  color: string;
  categoryName: string;
};

function VideoCard({
  situationThumbnail,
  progress,
  situationTitle,
  situationId,
  isCompleted,
  color,
  categoryName,
}: CardProp) {
  //모달 관련 함수
  const [modal, setModal] = useState<boolean>(false);
  const closeModal = () => setModal(false);
  // 모달 관련 함수 종료

  return (
    <div className={styles.CardContainer}>
      {isCompleted && (
        <img
          className={`${styles.Crown} noselect`}
          src="img/Crown.png"
          alt="crown"
        />
      )}
      <Card
        sx={{
          borderRadius: "10px",
        }}
        onClick={() => {
          setModal(true);
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={situationThumbnail}
            alt="green iguana"
          />
          <CardContent>
            <BorderLinearProgress variant="determinate" value={progress} />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                textAlign: "left",
                marginTop: "10px",
                fontFamily: "CookieRun-Regular",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {situationTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <StudyEntryModal
        closeModal={closeModal}
        modal={modal}
        situationTitle={situationTitle}
        categoryName={categoryName}
        color={color}
        progress={progress}
        situationId={situationId}
      />
    </div>
  );
}

export default VideoCard;
