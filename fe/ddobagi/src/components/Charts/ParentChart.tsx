import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";

interface Props {
  totalLabel: string;
  totalValue: number;
  totalColor: string;
}

const RadialBarChart = ({ totalLabel, totalValue, totalColor }: Props) => {
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  const value = totalValue <= 100 ? totalValue : 100;
  const gradient = {
    shade: "dark",
    type: "horizontal",
    shadeIntensity: 0.5,
    gradientToColors: [totalColor],
    inverseColors: true,
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 50, 100],
  };

  const options = {
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "25px",
          },
          value: {
            fontSize: "20px",
            fontFamily:
            language === "CN"
              ? "JingNanMaiYuanTi"
              : language === "VI"
              ? "UVNHaiBaTrung"
              : "MaplestoryOTFLight",
          },
          total: {
            show: true,
            label: totalLabel,
            formatter: (w: any): string => {
              return `${value}%`;
            },
            fontSize:"25px",
            fontFamily:
            language === "CN"
              ? "JingNanMaiYuanTi"
              : language === "VI"
              ? "UVNHaiBaTrung"
              : "MaplestoryOTFLight",
          },
        },
        fill: {
          type: "gradient",
          gradient: gradient,
        },
      },
    },
    colors: [totalColor],
  };

  const series = [value];

  return (
    <Chart options={options} series={series} type="radialBar" height="350" />
  );
};

export default RadialBarChart;
