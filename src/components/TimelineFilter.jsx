import React, { useState } from "react";
import { Box, Flex, Select, Text, Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CardSection from "./CardSection";
import MainBarLineChart from "./MainBarLineChart";
import { useSelector } from "react-redux";
import TableDisplay from "./TableDisplay";
import PieChart from "./PieChart";


const TimelineFilter = () => {
  const store = useSelector((store) => store.data);
  const [selectedTimeline, setSelectedTimeline] = useState("Jan22-Dec23");

  const filterDataByTimeline = (item) => {
    switch (selectedTimeline) {
      case "Jan22-Dec23":
        return true;
      case "Jan22-Dec22":
        return item.year === 2022;
      case "Jan23-Dec23":
        return item.year === 2023;
      default:
        return false;
    }
  };

  const filteredData = store.filter(filterDataByTimeline);

  return (
    <Box>
      <Flex
        align="center"
        justify="flex-end"
        fontSize="12px"
        pr="50px"
        m="28px 0px 80px 0px"
      >
        <Flex
          border="1px solid green"
          borderRadius="8px"
          alignItems="center"
          position="relative"
        >
          <Box p="10px">Show Timeline:</Box>
          <Select
            color="green"
            fontWeight={500}
            width="150px"
            fontSize="12px"
            border="none"
            value={selectedTimeline}
            onChange={(e) => setSelectedTimeline(e.target.value)}
            _focus={{ boxShadow: "none" }}
            icon={<Icon as={ChevronDownIcon} color="green.500" />}
          >
            <option value="Jan22-Dec23">Jan22-Dec23</option>
            <option value="Jan22-Dec22">Jan22-Dec22</option>
            <option value="Jan23-Dec23">Jan23-Dec23</option>
          </Select>
        </Flex>
      </Flex>
      <Box
        borderRadius="8px"
        bgColor="#fefefe"
        mr="10px"
        boxShadow="0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
      >
        <CardSection />
        <Box
          boxShadow="0px 4px 15px rgba(0, 0, 0, 0.1)"
          bgColor="#FFF"
          pt="20px"
          borderRadius="8px"
          w={{ base: "90%", md: "90%", xl: "1005px" }}
          m="20px 0px 0px 20px"
          p="20px 0px 30px 0px"
        >
          <Text
            color="black"
            m="0px 0px 20px 20px"
            fontFamily="Inter"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            Emission/Revenue
          </Text>
          <MainBarLineChart filteredData={filteredData} />
        </Box>
        <Box display={{ base: "block", xl: "flex" }} gap={8}>
          <PieChart />
          <TableDisplay />
        </Box>
      </Box>
    </Box>
  );
};

export default TimelineFilter;
