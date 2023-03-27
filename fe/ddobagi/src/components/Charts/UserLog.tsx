import React, { useState } from "react";
import styles from "./Charts.module.scss";

function UserLog() {
  return (
    <div className={styles.Background2}>
      <div>
        <div>본 영상</div>
        <div> x </div>
      </div>
      <div>
        <div>녹음한 문장</div>
        <div> x</div>
      </div>
      <div>
        <div>공부한 단어</div>
        <div>x</div>
      </div>
      <div>
        <div>모은 왕관</div>
        <div>x </div>
      </div>
    </div>
  );
}

export default UserLog;
