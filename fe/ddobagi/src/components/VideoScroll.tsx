import React, { useRef } from "react";
import VideoCard from "./VideoCard";
import styles from "./VideoScroll.module.scss";
import { IconButton } from "@mui/material";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";

interface Videolist {
  situationThumbnail: string;
  progress: number;
  situationTitle: string;
  situationId: number;
  isCompleted: boolean;
}

type VidProp = {
  color: string;
  videolist: Videolist[];
};

function VideoScroll({ color, videolist }: VidProp) {
  const componentRef = useRef<HTMLDivElement>(null);

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
        {videolist.map((item, index) => (
          <VideoCard
            key={index}
            situationThumbnail={item.situationThumbnail}
            progress={item.progress}
            situationTitle={item.situationTitle}
            situationId={item.situationId}
            isCompleted={item.isCompleted}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoScroll;
