import React, { useRef, useEffect, useState } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Study.module.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import Recording from "./Recording";
import ColorBtn from "../ColorBtn";

function ConversationStudy() {
  // navigate에 넣어 둔 state 값들을 가져옵니다.
  const location = useLocation();
  const categoryName = location.state?.categoryName;
  const situationTitle = location.state?.situationTitle;
  const color = location.state?.color;
  const situationId = location.state?.situationId;
  const progress = location.state?.progress;
  const userId = useSelector(
    (state: RootState) => state.inputUserInfo.payload.id
  );

  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //

  const navigate = useNavigate();
  const goBack = () => navigate("/CategoryList");
  const goWord = () => {
    navigate(`/learning/quiz/${situationId}`, {
      state: {
        categoryName: categoryName,
        situationTitle: situationTitle,
        progress: progress,
        color: color,
        situationId: situationId
      },
    });
  };

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
  interface Script {
    // Learning 객체의 속성을 정의합니다.
    scriptId: number;
    startTime: string;
    endTime: string;
    scriptRole: string;
    defaultContent: string;
    recordedUrl: string;
    lang: string;
    transContent: string;
  }
  const [scripts, setScripts] = useState<Script[]>([]);

  useEffect(() => {
    const fetchScript = async () => {
      try {
        const response = await axios.get<Script[]>(
          `http://j8a608.p.ssafy.io:8080/api/conversations/${situationId}/${userId}/script`
        );
        const newScripts = [];
        if (language === "VI") {
          for (const item of response.data) {
            if (item.lang === "VI") {
              newScripts.push(item);
            }
          }
        } else {
          for (const item of response.data) {
            if (item.lang === "CN") {
              newScripts.push(item);
            }
          }
        }
        setScripts(newScripts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchScript();
  }, []);

  const opts: YouTubeProps["opts"] = {
    height: "467",
    width: "830",
    playerVars: {
      end: scripts[scripts.length - 1]?.endTime, // 마지막 문장이 끝나는 시간을 데이터로 받아옵니다. -> end 이벤트를 발생시켜야 합니다.
      controls: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  //동영상 정보
  interface MapType {
    situationVideoUrl: string;
    lang: {
      [key: string]: {
        title: string;
        desc: string;
      };
    };
  }
  const [videoInfo, setVideoInfo] = useState<MapType | null>(null);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await axios.get<MapType>(
          `http://j8a608.p.ssafy.io:8080/api/conversations/${situationId}`
        );
        setVideoInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoInfo();
  }, []);

  const videoId = videoInfo?.situationVideoUrl.split(".be/")[1];
  const videoDescription = videoInfo?.lang[language]?.desc;
  //

  const [record, setRecord] = useState<number>(0);

  useEffect(() => {
    const fetchRecordInfo = async () => {
      try {
        const response = await axios.get<number>(
          `http://j8a608.p.ssafy.io:8080/api/conversations/${situationId}/${userId}/record`
        );
        setRecord(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecordInfo();
  }, []);


  return (
    <div className={styles.FullContainer}>
      <div className={styles.LeftContainer}>
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
        <div onClick={goBack} className={styles.CloseBtn}>나가기</div>
      </div>
      <div className={styles.RightContainer}>
        <div className={styles.scores}>
          {record} / {scripts.length}
        </div>
        <div
          className={styles.OuterContainer}
          style={{ backgroundColor: color }}
        >
          <div className={styles.InnerContainer}>
            {scripts.map((item, index) => (
              <div key={index} className={styles.bubbleGroup}>
                <div className={styles.Scripts}>
                  <div
                    className={`${styles.bubble} ${item.scriptRole === "RIGHT" ? styles.RIGHT : styles.LEFT
                      }`}
                  >
                    <div>{item.defaultContent}</div>
                    <div>{item.transContent}</div>
                  </div>
                  <div className={styles.BtnGroup}>
                    <Recording
                      situationId={situationId}
                      scriptId={item.scriptId}
                      item={item}
                      videoFrame={videoFrame}
                      play={play}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.LastGroup}>
              <ColorBtn content="뒤로가기" color="#ffffff" width="10rem" onClick={goBack}></ColorBtn>
              <ColorBtn content="단어공부" color="#ffffff" width="10rem" onClick={goWord}></ColorBtn>
            </div>
          </div>
        </div>
        <img src="/img/Hands2.png" alt="hands" className={styles.handImg} />
      </div>
    </div>
  );
}

export default ConversationStudy;
