import React, { useEffect, useState } from "react";
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController } from "chart.js";
import { Chart } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const MainBarLineChart = ({ filteredData }) => {
  const [emissionData2022, setEmissionData2022] = useState([]);
  const [emissionData2023, setEmissionData2023] = useState([]);
  const [reData2022, setReData2022] = useState([]);
  const [reData2023, setReData2023] = useState([]);

  useEffect(() => {
    const emissions2022 = extractDataByYear(filteredData, 2022, "emissions");
    const emissions2023 = extractDataByYear(filteredData, 2023, "emissions");
    const re2022 = extractDataByYear(filteredData, 2022, "re");
    const re2023 = extractDataByYear(filteredData, 2023, "re");

    setEmissionData2022(emissions2022);
    setEmissionData2023(emissions2023);
    setReData2022(re2022);
    setReData2023(re2023);
  }, [filteredData]);

  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "Emission-2023",
        backgroundColor: "#546fc6",
        data: emissionData2023,
        borderColor: "white",
        borderWidth: 2,
        yAxisID: "bar-y-axis",
      },
      {
        type: "bar",
        label: "Emission-2022",
        backgroundColor: "#91cb73",
        data: emissionData2022,
        yAxisID: "bar-y-axis",
      },
      {
        type: "line",
        label: "R/E-2023",
        borderColor: "#f9c561",
        borderWidth: 1,
        fill: false,
        data: reData2023,
        yAxisID: "line-y-axis",
      },
      {
        type: "line",
        label: "R/E-2022",
        borderColor: "#e07374",
        borderWidth: 1,
        fill: false,
        data: reData2022,
        yAxisID: "line-y-axis",
      },
    ],
  };

  const options = {
    scales: {
      x: { type: "category" },
      "bar-y-axis": {
        type: "linear",
        position: "left",
        title: { display: true, text: "Emission", font: { size: 14, weight: "bold" } },
      },
      "line-y-axis": {
        type: "linear",
        position: "right",
        grid: { display: false },
        title: { display: true, text: "R/E", font: { size: 14, weight: "bold" } },
      },
    },
  };

  return (
    <Box w={{ base: "100%", lg: "946px" }} ml={"20px"} borderRadius={"12px"} bgColor={"#FFF"}>
      <Chart type="bar" data={data} options={options} />
    </Box>
  );
};

const extractDataByYear = (data, year, property) => {
  return data
    .filter((item) => item.year === year)
    .map((item) => item[property]);
};

export default MainBarLineChart;
