import React, { useEffect, useState } from "react";
import { Grid, GridItem, Flex, Text } from "@chakra-ui/react";
import Card from "./Card";
import { useSelector } from "react-redux";

const CardSection = () => {
  const [emissionData, setEmissionData] = useState("");
  const [revenue, setRevenue] = useState("");
  const store = useSelector((store) => store.data);

  useEffect(() => {
    const dataFor2023 = store.filter((item) => item.year === 2023);

    const totalEmissions2023 = dataFor2023.reduce((sum, current) => sum + current.emissions, 0);
    const totalRevenue = dataFor2023.reduce((sum, current) => sum + current.re, 0).toFixed(2);

    setEmissionData(totalEmissions2023);
    setRevenue(totalRevenue);
  }, [store]);

  return (
    <Grid
      w={{ base: "90%", md: "90%", xl: "90%" }}
      templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
      gap={2}
      // w="90%"
      pl="20px"
      css={{ transform: "translateY(-50px)" }}
    >
      <GridItem>
        <Card
          title="Current Year Emissions"
          hasText={true}
          emissionData={emissionData}
          co="CO2"
          yoy="7.2"
          yo="%↑YOY"
          border="#E03021"
          gradient="(0deg, rgba(224, 48, 33, 0.04) 0%, rgba(224, 48, 33, 0.04) 100%), #FFF"
        />
      </GridItem>
      <GridItem>
        <Card
          title="Revenue to Emission Ratio"
          hasText={false}
          emissionData={revenue}
          yoy="5.6"
          yo="%↑YOY"
          border="#FFC400"
          gradient="(0deg, rgba(255, 196, 0, 0.04) 0%, rgba(255, 196, 0, 0.04) 100%), #FFF"
        />
      </GridItem>
      <GridItem>
        <Card
          title="Category-1"
          hasText={true}
          border="#3bb85e"
          emissionData="32% of Scope"
          gradient="(0deg, rgba(59, 184, 94, 0.04) 0%, rgba(59, 184, 94, 0.04) 100%), #FFF"
        />
      </GridItem>
      <GridItem w={{ base: "100%", xl: '70%' }}>
        <Flex
          flexDir="column"
          bgColor="#4bbd92"
          justifyContent="space-around"
          alignItems="center"
          gap={4}
          py="12px"
          borderRadius="12px"
        >
          <Text
            color="#FFF"
            fontFamily="Inter"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="18px"
            textAlign="center"
            w="70%"
          >
            Total number of reached suppliers
          </Text>
          <Text
            color="#FFF"
            fontFamily="Inter"
            fontSize="46px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            143
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default CardSection;









