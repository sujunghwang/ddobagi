import React, { useCallback } from "react";
import { ReactMic, ReactMicStopEvent } from "react-mic";

interface RecordingState {
  isRecording: boolean;
  blobUrl: string | null;
}
interface RecordingProps {
  index: number;
  record?: RecordingState;
  startRecording: () => void;
  stopRecording: (blobUrl: string) => void;
}

function Recording(props: RecordingProps) {
  const {
    index,
    record = { isRecording: false, blobUrl: null },
    startRecording,
    stopRecording,
  } = props;

  console.log(record.isRecording);

  const onStop = (recordedBlob: ReactMicStopEvent) => {
    const blobUrl = URL.createObjectURL(recordedBlob.blob);
    stopRecording(blobUrl);
  };
  
  return (
    <div>
      <ReactMic
        record={record.isRecording}
        onStop={onStop}
        strokeColor="#000000"
        backgroundColor="#ffffff"
      />
      <button onClick={() => startRecording()} disabled={record.isRecording}>
        Record
      </button>
      <button
        onClick={() => {
          stopRecording("");
        }}
        disabled={!record.isRecording}
      >
        stop
      </button>
      <audio src={record.blobUrl || undefined} controls />
    </div>
  );
}

export default Recording;
