import React, { useState, useEffect } from "react";
import styles from "./MyPage.module.scss";
import ColorBtn from "../components/ColorBtn";
import UserInfoModal from "../components/modal/UserInfoModal";
import BreadCrumbs from "../components/BreadCrumbs";
import MypageCharts from "../components/Charts/MypageCharts";
import UserLog from "../components/Charts/UserLog";
import { RootState } from "../redux/RootReducer";
import { useSelector } from "react-redux";
import axios from "axios";
import Loading from "../components/Loading";

function MyPage() {
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  const [modal, setModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");
  const closeModal = () => setModal(false);
  const userId = useSelector(
    (state: RootState) => state.inputUserInfo.payload.id
  );
  const userName = useSelector(
    (state: RootState) => state.inputUserInfo.payload.name
  );
  // 마이페이지 통계 정보를 수령합니다.
  interface data {
    viewedVideoCount: number;
    recordedScriptCount: number;
    studiedQuizCount: number;
    crownCount: number;
    schoolCategoryProgress: number;
    homeCategoryProgress: number;
    storeCategoryProgress: number;
    playgroundCategoryProgress: number;
    scriptProgress: number;
    quizProgress: number;
    cultureProgress: number;
  }

  interface Static {
    data: data;
  }

  const [statistics, setStatistics] = useState<data | null>(null);

  useEffect(() => {
    const fetchStatics = async () => {
      try {
        const response = await axios.get<Static>(
          `http://j8a608.p.ssafy.io:8080/api/users/${userId}/statistics`
        );
        setStatistics(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatics();
  }, []);

  // 오답노트용 정보입니다. 차후 타 페이지로 뺄 것.
  interface reviewData {
    quizId: number;
    beforeSentence: string;
    afterSentence: string;
    answer: string;
    option1: string;
    option2: string;
    option3: string;
  }

  interface reviews {
    data: reviewData;
  }

  const [reviewList, setReviewList] = useState<reviewData | null>(null);

  useEffect(() => {
    const fetchWrongs = async () => {
      try {
        const response = await axios.get<reviews>(
          `http://j8a608.p.ssafy.io:8080/api/users/${userId}/review`
        );
        setReviewList(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWrongs();
  }, []);

  // 리뷰용 API

  return (
    <div className={styles.body}>
      <div className={styles.Banner}>
        <div className={styles.Header}>
          {language === "CN"
            ? "我的简历"
            : language === "VI"
              ? "Thông tin của tôi"
              : "내 정보"}</div>
      </div>
      <div className={styles.BreadCrum}>
        <BreadCrumbs />
      </div>
      <div className={styles.title}>
        {language === "VI"
          ? "Hồ sơ của " : ""}
        {userName}
        {language === "CN"
          ? "的记录"
          : language === "VI"
            ? ""
            : "의 기록"}</div>
      {statistics ? <UserLog statistics={statistics} /> : <Loading />}

      <div className={styles.Btn}>
        <ColorBtn
          content={language === "CN"
            ? "信息变更"
            : language === "VI"
              ? "thay đổi thông tin"
              : "회원정보 수정"}
          color="#FF6B6B"
          width="15rem"
          onClick={() => {
            setModal(true);
            setModalContent("InfoEdit");
          }}
        />
      </div>
      <div className={styles.title}>{language === "CN"
        ? "学习水平"
        : language === "VI"
          ? "tiến độ học vấn"
          : "학습 진행도"}</div>
      {statistics ? <MypageCharts statistics={statistics} /> : <Loading />}
      <div className={styles.CheckList}>
        <div className={styles.Header}>{language === "CN"
          ? "复习"
          : language === "VI"
            ? "việc ôn tập"
            : "다시 풀기"}</div>
        <div style={{ fontSize: "1.5rem" }}>
          {language === "CN"
            ? "把错题重新做一遍吧！"
            : language === "VI"
              ? "Hãy thử giải lại câu hỏi sai đi!"
              : "틀렸던 문제들을 다시 풀어보세요!"}
        </div>
        <div className={styles.Btn}>
          <ColorBtn
            content={language === "CN"
              ? "解题"
              : language === "VI"
                ? "giải quyết vấn đề"
                : "문제 풀기"}
            color="#FFD93D"
            width="11.5rem"
            onClick={() => { }}
          />
        </div>
      </div>
      <UserInfoModal
        closeModal={closeModal}
        modalContent={modalContent}
        setModalContent={setModalContent}
        modal={modal}
      />
    </div>
  );
}

export default MyPage;
