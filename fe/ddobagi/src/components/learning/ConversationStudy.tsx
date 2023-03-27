import React, { useRef, useEffect, useState } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Study.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
// import { ReactMic, ReactMicStopEvent, ReactMicProps } from "react-mic";
import Recording from "./Recording";

function ConversationStudy() {
  // navigate에 넣어 둔 state 값들을 가져옵니다.
  const location = useLocation();
  const categoryName = location.state?.categoryName;
  const situationTitle = location.state?.situationTitle;
  const color = location.state?.color;

  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //

  const navigate = useNavigate();
  const goBack = () => navigate("/CategoryList");

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

  //영상이 끝나면 실행하는 함수
  const onPlayerEnd: YouTubeProps["onEnd"] = (event) => {
    console.log("끝남");
  };

  // 스크립트를 요청하는 구문. 각 스크립트별 데이터가 리스트로 제공됨.
  // 임의 응답 데이터 http://localhost:8080/api/conversations/{situationId}/{userId}/script
  const scriptResponse = [
    {
      scriptId: 1,
      startTime: "0",
      endTime: "5",
      scriptRole: "RIGHT",
      defaultContent: "좋은 아침.",
      recordedUrl: "www.abc.kr",
      lang: "CHI",
      transContent: "早上好。",
    },
    {
      scriptId: 2,
      startTime: "10",
      endTime: "15",
      scriptRole: "RIGHT",
      defaultContent: "안녕히 주무셨어요?",
      recordedUrl: "www.abc.kr",
      lang: "CHI",
      transContent: "早上好。",
    },
    {
      scriptId: 3,
      startTime: "15",
      endTime: "20",
      scriptRole: "RIGHT",
      defaultContent: "그럼, 잘 잤지. 아침은 뭐 먹을까?",
      recordedUrl: "www.abc.kr",
      lang: "CHI",
      transContent: "好吧，睡个好觉。 早餐吃什么?",
    },
    {
      scriptId: 4,
      startTime: "20",
      endTime: "25",
      scriptRole: "RIGHT",
      defaultContent: "계란프라이가 먹고 싶어요!",
      recordedUrl: "www.abc.kr",
      lang: "CHI",
      transContent: "我想吃煎鸡蛋！",
    },
    {
      scriptId: 5,
      startTime: "25",
      endTime: "30",
      scriptRole: "RIGHT",
      defaultContent: "그래, 금방 해 줄게.",
      recordedUrl: "www.abc.kr",
      lang: "CHI",
      transContent: "好的，我会尽快做的。",
    },
    {
      scriptId: 6,
      startTime: "30",
      endTime: "35",
      scriptRole: "RIGHT",
      defaultContent: "와! 신난다!",
      recordedUrl: "www.abc.kr",
      lang: "CHI",
      transContent: "好的，我会尽快做的。",
    },
    {
      scriptId: 7,
      startTime: "35",
      endTime: "40",
      scriptRole: "RIGHT",
      defaultContent: "추가 텍스트입니다.",
      recordedUrl: "www.abc.kr",
      lang: "CHI",
      transContent: "好的，我会尽快做的。",
    },
  ];

  const opts: YouTubeProps["opts"] = {
    height: "467",
    width: "830",
    playerVars: {
      // end: Number(scriptResponse[scriptResponse.length - 1].endTime), // 마지막 문장이 끝나는 시간을 데이터로 받아옵니다.
      controls: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  // 녹음 데이터 관리
  interface RecordingState {
    isRecording: boolean;
    blobUrl: string | null;
  }
  const [records, setRecords] = useState<boolean>(false);
  const blobUrls = useRef<string[]>(new Array(scriptResponse.length).fill(""));
  const startRecording = (index: number) => {
    setRecords(true);
  };

  const stopRecording = (index: number) => {
    setRecords(false);
  };

  // const onStop = (recordedBlob: ReactMicStopEvent, id: number) => {
  //   const blobUrl = recordedBlob.blobURL;
  //   blobUrls.current[id] = blobUrl;
  // };

  // 비디오 데이터 요청  GET http://localhost:8080/api/conversations/{situationId}
  // 임의 응답 데이터
  interface MapType {
    [key: string]: {
      title: string;
      desc: string;
    };
  }
  const response = {
    situationVideoUrl: "https://www.youtube.com/watch?v=On_ZA4RNfyU",
    map: {
      CN: {
        title: "问好",
        desc: "这是视频的描述",
      },
      KR: {
        title: "인사하기",
        desc: "동영상에 대한 설명입니다. 설명이니까 좀 길어야 되지 않을까요? 얼마나 길면 문제가 생길까요? 더 늘려보라고 ㅋㅋㅋ 이제 더 늘려도 안밀린다 하하하하ㅏㅎ 신난다재미난다게임오브더데스근데 이렇게까지 길어지지는않겠지만 아무튼 쭉 밀어보면 ",
      },
      VI: {
        title: "nói xin chào",
        desc: "Đây là mô tả của video",
      },
    } as MapType,
  };

  const videoId = response.situationVideoUrl.split("?v=")[1];
  const videoDescription = response.map[language]?.desc;

  return (
    <div className={styles.FullContainer}>
      <div className={styles.LeftContainer}>
        <div onClick={goBack} className={styles.CloseBtn}>
          <CloseIcon sx={{ fontSize: "2rem" }} />
        </div>
        <div>
          <YouTube
            opts={opts}
            videoId={videoId}
            onReady={onPlayerReady}
            onEnd={onPlayerEnd}
          />
        </div>
        <div className={styles.TextBox}></div>
        <div className={styles.Title}>{categoryName}</div>
        <div className={styles.SubTitle}>{situationTitle}</div>
        <div className={styles.Description}>{videoDescription}</div>
      </div>
      <div className={styles.RightContainer}>
        <div className={styles.scores}>녹음 완료한 갯수 / 총 스크립트 갯수</div>
        {/* <ReactMic
          record={records}
          onStop={(recordedBlob: ReactMicStopEvent) => onStop(recordedBlob, 2)}
          strokeColor="#000000"
          backgroundColor="#ffffff"
        /> */}
        <div
          className={styles.OuterContainer}
          style={{ backgroundColor: color }}
        >
          <div className={styles.InnerContainer}>
            {scriptResponse.map((item, index) => (
              <div key={index} className={styles.bubbleGroup}>
                <div className={styles.Scripts}>
                  <div className={styles.bubble}>
                    <div>{item.defaultContent}</div>
                    <div>{item.transContent}</div>
                  </div>
                  <div className={styles.BtnGroup}>
                    <div
                      className={styles.RBtn}
                      onClick={() => {
                        play(Number(item.startTime), Number(item.endTime));
                      }}
                    >
                      <PlayArrowRoundedIcon sx={{ fontSize: "2rem" }} />
                    </div>
                    <div
                      className={styles.GBtn}
                      onClick={() => startRecording(index)}
                    >
                      <MicRoundedIcon
                        sx={{ fontSize: "2rem", transformOrigin: "center" }}
                      />
                    </div>
                    <div
                      id={String(index)}
                      onClick={(event) => {
                        stopRecording(index);
                      }}
                    >
                      녹음 정지
                    </div>
                    <audio src={blobUrls.current[index]} controls />
                    <div className={styles.YBtn}>
                      <VolumeUpRoundedIcon sx={{ fontSize: "2rem" }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src="/img/Hands2.png" alt="hands" className={styles.handImg} />
      </div>
    </div>
  );
}

export default ConversationStudy;
