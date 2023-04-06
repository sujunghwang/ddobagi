import React from "react";
import ColumnChartWithGroupLabel from "../../components/Charts/StickChart";
// import { Grid } from "@mui/joy";
import { Box, Grid } from "@mui/material";

interface Props {
  chartdata: {
    homeCategoryProgress : number; 
    playgroundCategoryProgress : number;
    schoolCategoryProgress : number;
    storeCategoryProgress : number;
    cultureProgress: number;
    quizProgress : number;
    scriptProgress : number;
    userAllProgressAvg: number;
    otherAllProgressAvg: number;
    userPronounceScoreAvg: number;
    otherPronounceScoreAvg: number;
  };
  language: string;
}

const GroupedColumnCharts = ({ chartdata, language }: Props) => {
  let allProgressData: { name: string; data: number[] }[] = [];
  let pronounceScoreData: { name: string; data: number[] }[] = [];

  if (language === "CN") {
    pronounceScoreData = [
      {
        name: "相关用户",
        data: [chartdata.userPronounceScoreAvg],
      },
      {
        name: "所有用户",
        data: [chartdata.otherPronounceScoreAvg],
      },
    ];
    allProgressData = [
      {
        name: "相关用户",
        data: [chartdata.userAllProgressAvg],
      },
      {
        name: "所有用户",
        data: [chartdata.otherAllProgressAvg],
      },
    ];
  } else if (language === "VI") {
    pronounceScoreData = [
      {
        name: "Người dùng tương ứng",
        data: [chartdata.userPronounceScoreAvg],
      },
      {
        name: "Tất cả người dùng",
        data: [chartdata.otherPronounceScoreAvg],
      },
    ];
    allProgressData = [
      {
        name: "Người dùng tương ứng",
        data: [chartdata.userAllProgressAvg],
      },
      {
        name: "Tất cả người dùng",
        data: [chartdata.otherAllProgressAvg],
      },
    ];
  } else {
    pronounceScoreData = [
      {
        name: "해당 사용자",
        data: [chartdata.userPronounceScoreAvg],
      },
      {
        name: "전체 사용자",
        data: [chartdata.otherPronounceScoreAvg],
      },
    ];
    allProgressData = [
      {
        name: "해당 사용자",
        data: [chartdata.userAllProgressAvg],
      },
      {
        name: "전체 사용자",
        data: [chartdata.otherAllProgressAvg],
      },
    ];
  }

  // const pronounCategories = language === "CN"
  // ? "发音平均分数"
  // : language === "VI"
  // ? "điểm trung bình phát âmc"
  // : "발음 평균 점수"
  
  const pronounCategories = language === "CN"
  ? "发音平均分数 (5分满分)"
  : language === "VI"
  ? "điểm trung bình phát âm (5 điểm tối đa)"
  : "발음 평균 점수 (5점 만점)";

  const progressCategories = language === "CN"
  ? "整体进度 (%)"
  : language === "VI"
  ? "toàn bộ quá trình thực hiện"
  : "전체 진행도 (%)"

  const point = language === "CN"
  ? "分数"
  : language === "VI"
  ? "điểm"
  : "점";

  
  return (
    <>
    <Box>
      <Grid container>
        <Grid item component="div" xs={12} md={6}>
          <ColumnChartWithGroupLabel
            // @ts-ignore
            data={pronounceScoreData}
            categories={[pronounCategories]}
            unit={point}
          />
        </Grid>
        <Grid item component="div" xs={12} md={6}>
          <ColumnChartWithGroupLabel
          // @ts-ignore
            data={allProgressData}
            categories={[progressCategories]}
            unit="%"
          />
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default GroupedColumnCharts;
