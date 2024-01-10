import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import TimelineFilter from "./TimelineFilter";


const MainContent = () => {
  return (
    <Box w={{base:"100%",xl:"83%"}} bgColor={'#f5f5f5'}>
      <NavBar />
      <TimelineFilter/>
    </Box>
  );
};

export default MainContent;
