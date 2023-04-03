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
import { useNavigate } from "react-router-dom";

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
    data: number[];
  }

  const [reviewList, setReviewList] = useState<reviewData | null>(null);

  useEffect(() => {
    const fetchWrongs = async () => {
      try {
        const response = await axios.get<reviewData>(
          `http://j8a608.p.ssafy.io:8080/api/users/${userId}/review`
        );
        setReviewList(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    
    fetchWrongs();
  }, [userId]);
  
  // console.log(reviewList)
  const ReviewNum = reviewList?.data
  console.log(ReviewNum)

  // 리뷰용 API
  const navigate = useNavigate();
  const navigateToReview = () => {
    navigate(`/learning/review/`, {
      state: {
        reviewNum: ReviewNum
      }
    });
  };

  return (
    <div className={styles.body}>
      <div className={styles.BreadCrum}>
        <BreadCrumbs />
      </div>
      <div className={styles.OuterContainer}>
        <div className={styles.userName}>
          <div className={styles.nameTxt}>{userName}</div>
          <div className={styles.Btn}>
            <ColorBtn
              content={
                language === "CN"
                  ? "信息变更"
                  : language === "VI"
                  ? "thay đổi thông tin"
                  : "회원정보 수정"
              }
              color="#FF6B6B"
              width="15rem"
              onClick={() => {
                setModal(true);
                setModalContent("InfoEdit");
              }}
            />
          </div>
        </div>

        <div className={styles.RContainer}>
          <div className={styles.BContainer}>
            {statistics ? <UserLog statistics={statistics} /> : <Loading />}
          </div>
          <div className={styles.BContainer}>
            {statistics ? (
              <MypageCharts statistics={statistics} />
            ) : (
              <Loading />
            )}
          </div>
          <div className={styles.Retry}>
            <div className={styles.title}>
              {language === "CN"
                ? "复习"
                : language === "VI"
                ? "việc ôn tập"
                : "다시 풀기"}
            </div>
            <hr className={styles.hr} />
            <div className={styles.DownGroup}>
              <div>
                {language === "CN"
                  ? "又可以解决错题了！"
                  : language === "VI"
                  ? "Bạn có thể giải quyết vấn đề sai một lần nữa!"
                  : "틀렸던 문제를 다시 풀어볼 수 있어요!"}
              </div>
              <div>
                <ColorBtn
                  content={
                    language === "CN"
                      ? "解题"
                      : language === "VI"
                      ? "giải quyết vấn đề"
                      : "문제 풀기"
                  }
                  color="#FFD93D"
                  width="11.5rem"
                  onClick={() => {
                    navigateToReview()
                  }}
                />
              </div>
            </div>
          </div>
          <UserInfoModal
            closeModal={closeModal}
            modalContent={modalContent}
            setModalContent={setModalContent}
            modal={modal}
          />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
