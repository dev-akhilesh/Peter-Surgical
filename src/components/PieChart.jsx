import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import vectorFullscreen from "../assets/vectorFullscreen.svg";
import vectorDots from "../assets/vectorDots.svg";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [supplierNames, setSupplierNames] = useState([]);
  const [emissionData, setEmissionData] = useState([]);
  const store = useSelector((store) => store.data);

  useEffect(() => {
    const supplierData = store.map((data) => ({
      name: data.supplier,
      emissions: data.emissions,
    }));

    const uniqueSupplierNames = Array.from(new Set(store.map((data) => data.supplier)));

    const aggregatedData = uniqueSupplierNames.map((supplierName) =>
      supplierData
        .filter((data) => data.name === supplierName)
        .reduce((sum, current) => sum + current.emissions, 0)
    );

    setSupplierNames(uniqueSupplierNames);
    setEmissionData(aggregatedData);
  }, [store]);

  const data = {
    labels: supplierNames,
    datasets: [
      {
        label: "CO2",
        data: emissionData,
        backgroundColor: [
          "#7c95ea",
          "#544b8d",
          "#b54f69",
          "#e994b1",
          "#3bb85e",
          "cyan",
          "#ffc400",
          "brown",
          "red",
        ],
        borderColor: [
          "#7c95ea",
          "#544b8d",
          "#b54f69",
          "#e994b1",
          "#3bb85e",
          "cyan",
          "#ffc400",
          "brown",
          "red",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box
      w={{ base: "90%", xl: "459px" }}
      m="16px 0px 0px 20px"
      borderRadius="12px"
      boxShadow="0px 4px 15px rgba(0, 0, 0, 0.1)"
      bgColor="#FFF"
    >
      <Header />

      <Box mt="30px" height="100%">
        <Doughnut data={data} />
      </Box>
    </Box>
  );
};

const Header = () => (
  <Flex justifyContent="space-between" alignItems="center" p="20px 20px">
    <Text
      color="black"
      fontFamily="Inter"
      fontSize="14px"
      fontWeight="500"
      lineHeight="normal"
    >
      Emission by Supplier
    </Text>
    <Flex border="1px solid #EBEBEB" gap="6px" boxShadow="0px 0.5px 4px 0px rgba(0, 0, 0, 0.02), 0px 2px 16px 0px rgba(0, 0, 0, 0.02), 0px 8px 80px 0px rgba(0, 0, 0, 0.04)" borderRadius="12px">
      <Image src={vectorFullscreen} alt="pie" p="4px 6px" />
      <Image src={vectorDots} alt="pie" p="8px 4px" />
    </Flex>
  </Flex>
);

export default PieChart;