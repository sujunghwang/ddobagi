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
import { useDispatch } from "react-redux";
import { inputUserInfo } from "../redux/UserInfo";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const navigate = useNavigate()
  const userStr = sessionStorage.getItem("token");
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
  //로그아웃 함수
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(inputUserInfo({ name: "", id: 0 }));
    sessionStorage.clear();
    navigate('/');
  };
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
          `https://j8a608.p.ssafy.io.api/api/users/${userId}/statistics`
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
          `https://j8a608.p.ssafy.io.api/api/users/${userId}/review`
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
            {userStr &&
              <ColorBtn
                content={
                  language === "CN"
                    ? "登出"
                    : language === "VI"
                      ? "đăng xuất"
                      : "로그아웃"
                }
                color="#FFCF70"
                width="15rem"
                onClick={logout}
              />}
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
                  onClick={() => { }}
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
