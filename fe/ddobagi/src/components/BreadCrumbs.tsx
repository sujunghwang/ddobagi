import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

interface pathnames {
  [key: string]: string;
}

interface Route {
  path: string;
  name: string;
}

function BreadCrumbs() {
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  const pathNames: pathnames = {
    CategoryList:
      language === "CN"
        ? "学习"
        : language === "VI"
        ? "học hỏi"
        : "한국어 연습",
    CultureList:
      language === "CN"
        ? "韩国文化"
        : language === "VI"
        ? "văn hoá"
        : "한국 문화",
    mypage:
      language === "CN"
        ? "我的简历"
        : language === "VI"
        ? "Thông tin của tôi"
        : "내 정보",
    parentpage:
      language === "CN"
        ? "监护人"
        : language === "VI"
        ? "người giám hộ"
        : "보호자",
    record:
      language === "CN"
        ? "子女学习记录"
        : language === "VI"
        ? "hồ sơ học tập của con cái"
        : "자녀 학습 기록",
    map:
      language === "CN"
        ? "多元文化中心位置"
        : language === "VI"
        ? "vị trí trung tâm đa văn hóa"
        : "다문화 센터 위치",
    news:
      language === "CN"
        ? "多文化新闻"
        : language === "VI"
        ? "tin tức đa văn hóa"
        : "다문화 뉴스",
    support:
      language === "CN"
        ? "多文化支援消息"
        : language === "VI"
        ? "tin tức hỗ trợ đa văn hóa"
        : "다문화 지원 소식",
  };
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  // 문자열이 담겨서 들어옴
  const pathArray = pathname.split("/");
  const arrayLen = pathArray.length;
  const routeLink = (path: string) => {
    if (path === "/parentpage") {
      return;
    } else {
      navigate(path);
    }
  };

  const home = "홈";

  const routers = () => {
    const breads = [];
    for (let i = 0; i < arrayLen; i++) {
      const nowPath = pathArray.slice(0, i + 1);
      const addPath = nowPath.length === 1 ? "/" : nowPath.join("/");
      const item: Route = {
        path: addPath,
        name: nowPath.length === 1 ? home : pathNames[pathArray[i]],
      };
      breads.push(item);
    }
    return breads;
  };
  const Breads = routers();

  const routes: Route[] = Breads;

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        display: "flex",
        justifyContent: "end",
        marginBottom: "1rem",
        userSelect: "none",
      }}
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {routes.map((route) => (
        <Typography
          sx={{
            fontFamily: "MaplestoryOTFLight",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          key={route.path}
          onClick={() => routeLink(route.path)}
          color="inherit"
        >
          {route.name === "홈" ? <HomeRoundedIcon /> : route.name}
        </Typography>
      ))}
    </Breadcrumbs>
  );
}

export default BreadCrumbs;
