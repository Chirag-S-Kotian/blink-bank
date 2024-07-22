"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 4879],
        backgroundColor: [
          "#4caf50",
          "#f44336",
          "#ffeb3b",
          "#9c27b0",
          "#3f51b5",
        ],
        hoverBackgroundColor: [
          "#45a049",
          "#f55a4e",
          "#ffeb3b",
          "#8e24aa",
          "#3e405a",
        ],
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DonutChart;
