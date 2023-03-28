import React, { useState, useRef } from 'react';
import axios from 'axios';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import styles from "./Study.module.scss"
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/RootReducer";


interface Props {
  situationId: number;
  scriptId: number;
}

const Recording = (props: Props) => {
  const recorderControls = useAudioRecorder();
  const situationId = props.situationId
  const scriptId = props.scriptId
  const userId = useSelector(
    (state: RootState) => state.inputUserInfo.payload.id
  );

  const [blobUrl, setBlobUrl] = useState<string>("")
  const audioRef = useRef<HTMLAudioElement>(null);

  const addAudioElement = async (blob: Blob) => {
    const formData = new FormData();
    formData.append('situationId', situationId.toString());
    formData.append('userId', userId.toString());
    formData.append('scriptId', scriptId.toString());
    formData.append('file', new File([blob], 'recording.wav'));

    console.log(formData)

    try {
      const response = await axios.post('http://j8a608.p.ssafy.io:8080/api/conversations/record', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);
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
      {recorderControls.isRecording ?
        <div className={styles.RBtn} onClick={recorderControls.stopRecording}>
          <FiberManualRecordRoundedIcon sx={{ fontSize: "1rem", transformOrigin: "center" }}
          /><div className={styles.pulse}>
          </div>
        </div>
        : <div
          className={styles.GBtn}
          onClick={recorderControls.startRecording}
        >
          <MicRoundedIcon
            sx={{ fontSize: "2rem", transformOrigin: "center" }}
          />
        </div>}

      <div className={styles.YBtn} onClick={handlePlay}>
        <VolumeUpRoundedIcon sx={{ fontSize: "2rem" }} />
      </div>
      <div style={{ display: 'none' }}
      >
        <AudioRecorder
          recorderControls={recorderControls}
          onRecordingComplete={addAudioElement}
        />
      </div>
      <audio src={blobUrl} ref={audioRef}></audio>
    </div>
  );
}

export default Recording;
