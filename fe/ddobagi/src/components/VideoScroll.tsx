import React, { useRef } from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";
import styles from "./VideoScroll.module.scss";
import { IconButton } from "@mui/material";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";

interface SituationTrans {
  lang: string;
  title: string;
}

interface Situation {
  situationId: number;
  thumbnail: string;
  progress: number;
  situationTransList: SituationTrans[];
  isCompleted: boolean;
}

interface Videolist {
  situationList: Situation[];
}

type VidProp = {
  color: string;
  videolist: Videolist;
  categoryName: string;
};

function VideoScroll({ color, videolist, categoryName }: VidProp) {
  const componentRef = useRef<HTMLDivElement>(null);
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );

  const lang = language === "CN" ? 0 : language === "VI" ? 2 : 1;

  return (
    <div
      ref={componentRef}
      style={{ backgroundColor: color }}
      className={styles.FContainer}
    >
      <IconButton
        className={styles.LeftIcon}
        onClick={() => {
          componentRef.current?.scrollBy({ left: -330, behavior: "smooth" });
        }}
        sx={{ position: "absolute", color: "white" }}
      >
        <PlayCircleOutlineOutlinedIcon sx={{ fontSize: "4rem" }} />
      </IconButton>
      <IconButton
        className={styles.RightIcon}
        onClick={() => {
          componentRef.current?.scrollBy({ left: 330, behavior: "smooth" });
        }}
        sx={{ position: "absolute", color: "white" }}
      >
        <PlayCircleOutlineOutlinedIcon sx={{ fontSize: "4rem" }} />
      </IconButton>
      <div className={styles.SContainer}>
        {videolist.situationList.map((item, index) => (
          <VideoCard
            key={index}
            situationThumbnail={item.thumbnail}
            progress={item.progress}
            situationTitle={item.situationTransList[lang].title}
            situationId={item.situationId}
            isCompleted={item.isCompleted}
            color={color}
            categoryName={categoryName}
          />
        ))}
        <div className="noselect" style={{ color: color }}>
          e
        </div>
      </div>
    </div>
  );
}

export default VideoScroll;
