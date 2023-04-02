import React, { useState, useEffect } from "react";
import VideoScroll from "../components/VideoScroll";
import BreadCrumbs from "../components/BreadCrumbs";
import Loading from "../components/Loading";
import styles from "./CategoryList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";
import axios from "axios";
interface SituationTrans {
  lang: string;
  title: string;
}

interface Situation {
  situationId: number;
  thumbnail: string;
  progress: number;
  situationTransList: SituationTrans[];
  isCompleted: boolean;
}

interface Videolist {
  situationList: Situation[];
}

function CategoryList() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //
  // axios통신으로 리스트를 받아와야 하는 부분//
  const userId = useSelector(
    (state: RootState) => state.inputUserInfo.payload.id
  );
  const [homeList, setHomeList] = useState<Videolist | null>(null);
  const [schoolList, setSchoolList] = useState<Videolist | null>(null);
  const [playGroundList, setPlayGroundList] = useState<Videolist | null>(null);
  const [storeList, setStoreList] = useState<Videolist | null>(null);

  useEffect(() => {
    const fetchLearning = async () => {
      try {
        const response = await axios.get<Videolist>(
          `http://j8a608.p.ssafy.io:8080/api/learnings/${userId}/HOME`
        );
        setHomeList(response.data);

        const response2 = await axios.get<Videolist>(
          `http://j8a608.p.ssafy.io:8080/api/learnings/${userId}/SCHOOL`
        );
        setSchoolList(response2.data);

        const response3 = await axios.get<Videolist>(
          `http://j8a608.p.ssafy.io:8080/api/learnings/${userId}/PLAYGROUND`
        );
        setPlayGroundList(response3.data);

        const response4 = await axios.get<Videolist>(
          `http://j8a608.p.ssafy.io:8080/api/learnings/${userId}/STORE`
        );
        setStoreList(response4.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLearning();
  }, []);

  // 카테고리명을 변수화 ( 모달에 넘겨주기 위함 )
  const house =
    language === "CN" ? "在家里" : language === "VI" ? "ở nhà" : "집에서";
  const school =
    language === "CN" ? "在学校" : language === "VI" ? "Ở trường" : "학교에서";
  const store =
    language === "CN"
      ? "学习"
      : language === "VI"
        ? "tại cửa hàng"
        : "가게에서";
  const playGround =
    language === "CN"
      ? "在操场上"
      : language === "VI"
        ? "tại sân chơi"
        : "놀이터에서";
  //

  return (
    <div className={styles.Fcontainer}>
      <div className={styles.Banner}>
        <div className={styles.Header}>
          {language === "CN"
            ? "学习"
            : language === "VI"
              ? "học hỏi"
              : "한국어 연습"}
        </div>
      </div>
      <div className={styles.BreadCrum}>
        <BreadCrumbs />
      </div>
      <div className={styles.CategoryBox}>
        <div className={styles.CategoryName}>{school}</div>
        {schoolList ? (
          <VideoScroll
            color={"#ffcfd8"}
            videolist={schoolList}
            categoryName={school}
          />
        ) : (
          <Loading />
        )}
      </div>
      <div className={styles.CategoryBox}>

        <div className={styles.CategoryName}>{house}</div>
        {homeList ? (
          <VideoScroll
            color={"#fff9e2"}
            videolist={homeList}
            categoryName={house}
          />
        ) : (
          <Loading />
        )}
      </div>
      <div className={styles.CategoryBox}>

        <div className={styles.CategoryName}>{store}</div>
        {playGroundList ? (
          <VideoScroll
            color={"#e8f9f6"}
            videolist={playGroundList}
            categoryName={store}
          />
        ) : (
          <Loading />
        )}
      </div>
      <div className={styles.CategoryBox}>

        <div className={styles.CategoryName}>{playGround}</div>
        {storeList ? (
          <VideoScroll
            color={"#e0f1ff"}
            videolist={storeList}
            categoryName={playGround}
          />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default CategoryList;
