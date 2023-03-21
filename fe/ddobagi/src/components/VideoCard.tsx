import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import Box from "@mui/material/Box";
import styles from "./VideoScroll.module.scss";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

type CardProp = {
  situationThumbnail: string;
  progress: number;
  situationTitle: string;
  situationId: number;
  isCompleted: boolean;
};

function VideoCard({
  situationThumbnail,
  progress,
  situationTitle,
  situationId,
  isCompleted,
}: CardProp) {
  return (
    <div className={styles.CardContainer}>
      {isCompleted && (
        <img className={styles.Crown} src="img/Crown.png" alt="crown" />
      )}
      <Card
        sx={{
          borderRadius: 5,
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
              }}
            >
              {situationTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default VideoCard;
