import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";

interface Props {
  data: { name: string; data: string[] }[];
  categories: string[];
  title: string;
}

const ColumnChartWithGroupLabel = ({ data, categories, title }: Props) => {
  const series = data.map((d) => ({ name: d.name, data: d.data.map(Number) }));
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          fontSize: "20px",
          fontFamily:
            language === "CN"
              ? "JingNanMaiYuanTi"
              : language === "VI"
              ? "UVNHaiBaTrung"
              : "MaplestoryOTFLight",
        },
      },
    },
    yaxis: {
      title: {
        text: title,
      },
      labels: {
        style: {
          fontSize: "20px",
          fontFamily:
            language === "CN"
              ? "JingNanMaiYuanTi"
              : language === "VI"
              ? "UVNHaiBaTrung"
              : "MaplestoryOTFLight",
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val.toString();
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  return <Chart options={options} series={series} type="bar" height="350" />;
};

export default ColumnChartWithGroupLabel;
