import React, { useState, useRef } from "react";
import axios from "axios";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import styles from "./Study.module.scss";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";


const toWav = require('audiobuffer-to-wav');
const audioContext = new (window.AudioContext)();
const fileReader = new FileReader();

async function convertWebmToWav(blob: Blob) {
  const audioBuffer = await audioContext.decodeAudioData(await blob.arrayBuffer());
  const wav = toWav(audioBuffer);

  return new Blob([ new DataView(wav) ], {
    type: 'audio/wav'
  });
}

interface Props {
  situationId: number;
  scriptId: number;
}

const Recording = (props: Props) => {
  const recorderControls = useAudioRecorder();
  const situationId = props.situationId;
  const scriptId = props.scriptId;
  const userId = useSelector(
    (state: RootState) => state.inputUserInfo.payload.id
  );

  const [blobUrl, setBlobUrl] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement>(null);

  const [score, setScore] = useState<number>(0);  // 서버에서 반환된 점수를 저장합니다.
  const addAudioElement = async (blob: Blob) => {
    const convertedBlob = await convertWebmToWav(blob);
    const formData = new FormData();
    formData.append("situation_id", situationId.toString());
    formData.append("user_id", userId.toString());
    formData.append("script_id", scriptId.toString());
    formData.append("file", new File([convertedBlob], "recording.wav"));

    try {
      const url = URL.createObjectURL(convertedBlob);
      setBlobUrl(url);
      const response = await axios.post(
        "http://j8a608.p.ssafy.io:8080/api/conversations/record",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const roundedNum: number = Math.round(response.data * 10) / 10; // 소수 첫째자리까지
      setScore(roundedNum)
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlay = () => {
    if (audioRef.current && blobUrl) {
      audioRef.current.play();
    }
  };

  return (
    <div className={styles.BtnGroup2}>
      {recorderControls.isRecording ? (
        <div className={styles.RBtn} onClick={recorderControls.stopRecording}>
          <FiberManualRecordRoundedIcon
            sx={{ fontSize: "1rem", transformOrigin: "center" }}
          />
          <div className={styles.pulse}></div>
        </div>
      ) : (
        <div className={styles.GBtn} onClick={recorderControls.startRecording}>
          <MicRoundedIcon
            sx={{ fontSize: "2rem", transformOrigin: "center" }}
          />
        </div>
      )}

      <div className={styles.YBtn} onClick={handlePlay}>
        <VolumeUpRoundedIcon sx={{ fontSize: "2rem" }} />
      </div>
      <div style={{ display: "none" }}>
        <AudioRecorder
          recorderControls={recorderControls}
          onRecordingComplete={addAudioElement}
        />
      </div>
      {score > 2 ?
        <div className={styles.confirmMark}>
          {score}
        </div>
        :
        <div className={styles.noConfirmMark}>
          {score}
        </div>}
      <audio src={blobUrl} ref={audioRef}></audio>
    </div>
  );
};

export default Recording;
