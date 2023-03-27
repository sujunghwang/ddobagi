import React from "react";
import VideoScroll from "../components/VideoScroll";
import BreadCrumbs from "../components/BreadCrumbs";
import styles from "./CategoryList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";
import TemporaryResponse from "../components/TemporaryResponse";
// 임시 리스트를 가져옴. 실제 서비스에서는 요청을 통해 해당 카테고리 아이템들의 리스트를 가져올 필요가 있음.
interface Videolist {
  situationId: number;
  thumbnail: string;
  isCompleted: boolean;
  progress: number;
  situationTrans: {
    lang: string;
    title: string;
  }[];
}

function CategoryList() {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //
  // axios통신으로 리스트를 받아와야 하는 부분//
  const testArray: Videolist[] = TemporaryResponse[
    "situationList"
  ] as Videolist[];
  // 가져온 리스트의 타입을 캐스팅

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
    <div className={styles.FContainer}>
      <img src="img/BlueHeader.png" alt="" className={styles.Header} />
      <div className={styles.BreadCrum}>
        <BreadCrumbs />
      </div>
      <div className={styles.CategoryName}>{house}</div>
      <VideoScroll
        color={"#FF6B6B"}
        videolist={testArray}
        categoryName={house}
      />
      <div className={styles.CategoryName}>{school}</div>
      <VideoScroll
        color={"#92B4EC"}
        videolist={testArray}
        categoryName={school}
      />
      <div className={styles.CategoryName}>{store}</div>
      <VideoScroll
        color={"#FFE69A"}
        videolist={testArray}
        categoryName={store}
      />
      <div className={styles.CategoryName}>{playGround}</div>
      <VideoScroll
        color={"#84D88F"}
        videolist={testArray}
        categoryName={playGround}
      />
    </div>
  );
}

export default CategoryList;
