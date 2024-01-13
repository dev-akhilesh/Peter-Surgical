import React, { useEffect, useState } from "react";
import {
  Table,
  Flex,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Box,
  Text,
  Image
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import iline from "../assets/iline.svg";
import download from "../assets/Vector.svg";

const TableDisplay = () => {
  const [selectedYearData, setSelectedYearData] = useState([]);
  const store = useSelector((store) => store.data);

  useEffect(() => {
    const dataFor2023 = store.filter((item) => item.year === 2023);
    setSelectedYearData(dataFor2023);
  }, [store]);

  return (
    <Box
      bgColor="#FFF"
      w={{ base: "100%", md: "643px" }}
      h="full"
      borderRadius="12px"
      mt="15px"
      p="20px 0px 0px 0px"
      boxShadow="0px 4px 15px rgba(0, 0, 0, 0.1)"
    >
      <Flex justifyContent="space-between" mb="10px" px="20px">
        <Flex w="30%">
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            Supplier-wise
          </Text>
          <Image src={iline} />
        </Flex>
        <Flex
          gap={2}
          border="1px solid #f7f7f7"
          alignItems="center"
          p="5px"
        >
          <Image src={download} />
          <Text
            borderLeft="1px solid black"
            pl="5px"
            fontFamily="Inter"
            fontSize="11px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
          >
            Download
          </Text>
        </Flex>
      </Flex>
      <Table variant="simple">
        <Thead color="#fafafa" borderTop="1px solid #ebebeb">
          <Tr>
            <Th
              color="#a4a4a4"
              fontFamily="Inter"
              fontSize="10px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              textTransform="uppercase"
              borderRight="1px solid #ebebeb"
            >
              Month
            </Th>
            <Th
              color="#a4a4a4"
              fontFamily="Inter"
              fontSize="10px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              textTransform="uppercase"
              borderRight="1px solid #ebebeb"
            >
              Emissions (in CO2e)
            </Th>
            <Th
              color="#a4a4a4"
              fontFamily="Inter"
              fontSize="10px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              textTransform="uppercase"
              borderRight="1px solid #ebebeb"
              display={{ base: "none", md: "block" }}
            >
              Revenue/Emission Ratio
            </Th>
            <Th
              color="#a4a4a4"
              fontFamily="Inter"
              fontSize="10px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              textTransform="uppercase"
              borderRight="1px solid #ebebeb"
            >
              YOY R/E Change
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {selectedYearData.map((sup) => (
            <Tr key={sup.id}>
              <Td
                borderRight="1px solid #ebebeb"
                textAlign="center"
                fontFamily="Inter"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                {sup.month}
              </Td>
              <Td
                fontFamily="Inter"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                borderRight="1px solid #ebebeb"
                textAlign="center"
              >
                {sup.emissions}
              </Td>
              <Td
                fontFamily="Inter"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                borderRight="1px solid #ebebeb"
                textAlign="center"
                display={{ base: "none", md: "block" }}
              >
                {sup.re}
              </Td>
              <Td
                fontFamily="Inter"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                borderRight="1px solid #ebebeb"
                textAlign="center"
              >
                {sup.yoy > 0 ? (
                  <Text color="green">{sup.yoy}%↓</Text>
                ) : (
                  <Text color="red">{sup.yoy}%↑</Text>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableDisplay;
