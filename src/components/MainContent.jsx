import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";


const MainContent = () => {
  return (
    <Box w={{base:"100%",xl:"83%"}} bgColor={'#f5f5f5'}>
      <NavBar />
    </Box>
  );
};

export default MainContent;
