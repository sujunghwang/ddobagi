import React from "react";
import Chart from "react-apexcharts";

interface Props {
  totalLabel: string;
  totalValue: number;
  totalColor: string;
}

const RadialBarChart = ({ totalLabel, totalValue, totalColor }: Props) => {
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
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: totalLabel,
            formatter: (w: any): string => {
              return `${value}%`;
            },
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

  return <Chart options={options} series={series} type="radialBar" height="350" />;
};

export default RadialBarChart;
