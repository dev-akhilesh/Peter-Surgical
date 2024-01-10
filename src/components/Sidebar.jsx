import React from "react";
import {
  Box, Image, Text, Flex, Button, Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.svg";
import setting from "../assets/setting.svg";
import drop from "../assets/drop.svg";
import beta from "../assets/beta.svg";

const Sidebar = () => {
  const renderMenu = (label, options) => (
    <Flex alignItems="center" mt={options ? '15px' : '10px'}>
      <Image src={options ? setting : drop} alt="logo" w={options ? "17px" : "24px"} h={options ? "17px" : "24px"} m={options ? "0px 5px 0px 12px" : "0px 5px 0px 10px"} />
      <Menu>
        <MenuButton
          as={Button}
          bg="none"
          color="white"
          rightIcon={<TriangleDownIcon />}
          _hover={{ bg: "gray.700" }}
          _expanded={{ bg: "gray.700" }}
        >
          {label}
        </MenuButton>
        {options && (
          <MenuList bgColor="#0f382f" color="white" border="1px solid #718096">
            {options.map((option, index) => (
              <MenuItem key={index} _hover={{ bgColor: "#1A202C" }} bgColor="#0f382f">
                {option}
              </MenuItem>
            ))}
          </MenuList>
        )}
      </Menu>
    </Flex>
  );

  return (
    <Box bg="black" w="17%" h="fill" display={{ base: "none", xl: "block" }}>
      <Box borderBottom="2px solid #212121">
        <Box p="13px 10px 13px 5px" w="90%" m="0px 15px 15px 15px">
          <Image src={logo} alt="peters" w="128px" h="47px" />
        </Box>
      </Box>

      <Flex flexDir="column" gap="10px" p={{ base: '0px', xl: "10px 15px 15px 5px" }} borderBottom="2px solid #212121">
        <Text p="13px 10px 13px 10px" color="#5C5C5C" fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight=" 18px" textTransform="uppercase">
          data-in
        </Text>
        {renderMenu("Energy", ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"])}
        {renderMenu("Water and Effluents", ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"])}
      </Flex>

      <Flex flexDir="column" gap="10px" p="10px 15px 15px 5px" borderBottom="2px solid #212121">
        <Text p="13px 10px 13px 10px" color="#5C5C5C" fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight=" 18px" textTransform="uppercase">
          Analyze
        </Text>
        <Flex alignItems="center" mt="15px">
          <Image src={setting} alt="peters" w="17px" h="17px" m="0px 5px 0px 12px" />
          <Text color="#FFF" fontFamily="Inter" fontSize="15px" fontStyle="normal" fontWeight="500" lineHeight=" 18px" ml="10px">
            Energy
          </Text>
        </Flex>
        <Flex alignItems="center" mt="20px">
          <Image src={drop} alt="peters" w="24px" h="24px" ml="10px" />
          <Text color="#FFF" fontFamily="Inter" fontSize="15px" fontStyle="normal" fontWeight="500" lineHeight=" 18px" ml="10px">
            Waste
          </Text>
          <Image src={beta} alt="peters" w="30px" h="24px" ml="4px" />
        </Flex>
      </Flex>

      <Flex h="177px" justifyContent="center" alignItems="center">
        <Button
          bgColor="#02ab6c"
          color="white"
          p="20px 33px 20px 33px"
          fontFamily="Inter"
          fontSize="12px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight=" 18px"
        >
          Open Help Center
        </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar;





// import React from "react";
// import {
//   Box, Image, Text, Flex, Button, Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from "@chakra-ui/react";
// import { TriangleDownIcon } from "@chakra-ui/icons";
// import logo from "../assets/logo.svg";
// import setting from "../assets/setting.svg";
// import drop from "../assets/drop.svg";
// import beta from "../assets/beta.svg";

// const Sidebar = () => {
//   const renderMenu = (label, options) => (
//     <Flex alignItems="center" mt={options ? '15px' : '10px'}>
//       <Image src={options ? setting : drop} alt="logo" w={options ? "17px" : "24px"} h={options ? "17px" : "24px"} m={options ? "0px 5px 0px 12px" : "0px 5px 0px 10px"} />
//       <Menu>
//         <MenuButton
//           as={Button}
//           bg="none"
//           color="white"
//           rightIcon={<TriangleDownIcon />}
//           _hover={{ bg: "gray.700" }}
//           _expanded={{ bg: "gray.700" }}
//         >
//           {label}
//         </MenuButton>
//         {options && (
//           <MenuList
//             bgColor="#0f382f"
//             color="white"
//             border="1px solid #718096"
//             style={{ minWidth: "50px", width: "200px" }}
//           >
//             {options.map((option, index) => (
//               <MenuItem key={index} _hover={{ bgColor: "#1A202C" }} bgColor="#0f382f">
//                 {option}
//               </MenuItem>
//             ))}
//           </MenuList>
//         )}
//       </Menu>
//     </Flex>
//   );



//   return (
//     <Box bg="black" w="17%" h="fill" display={{ base: "none", xl: "block" }}>
//       <Box borderBottom="2px solid #212121">
//         <Box p="13px 10px 13px 5px" w="90%" m="0px 15px 15px 15px">
//           <Image src={logo} alt="logo" w="128px" h="47px" />
//         </Box>
//       </Box>

//       <Flex flexDir="column" gap="10px" p={{ base: '0px', xl: "10px 15px 15px 5px" }} borderBottom="2px solid #212121">
//         <Text p="13px 10px 13px 10px" color="#5C5C5C" fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight=" 18px" textTransform="uppercase">
//           data-in
//         </Text>
//         {renderMenu("Energy", ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"])}
//         {renderMenu("Water and Effluents", ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"])}
//       </Flex>

//       <Flex flexDir="column" gap="10px" p="10px 15px 15px 5px" borderBottom="2px solid #212121">
//         <Text p="13px 10px 13px 10px" color="#5C5C5C" fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight=" 18px" textTransform="uppercase">
//           Analyze
//         </Text>
//         <Flex alignItems="center" mt="15px">
//           <Image src={setting} alt="peters" w="17px" h="17px" m="0px 5px 0px 12px" />
//           <Text color="#FFF" fontFamily="Inter" fontSize="15px" fontStyle="normal" fontWeight="500" lineHeight=" 18px" ml="10px">
//             Energy
//           </Text>
//         </Flex>
//         <Flex alignItems="center" mt="20px">
//           <Image src={drop} alt="peters" w="24px" h="24px" ml="10px" />
//           <Text color="#FFF" fontFamily="Inter" fontSize="15px" fontStyle="normal" fontWeight="500" lineHeight=" 18px" ml="10px">
//             Waste
//           </Text>
//           <Image src={beta} alt="peters" w="30px" h="24px" ml="4px" />
//         </Flex>
//       </Flex>

//       <Flex h="177px" justifyContent="center" alignItems="center">
//         <Button
//           bgColor="#02ab6c"
//           color="white"
//           p="20px 33px 20px 33px"
//           fontFamily="Inter"
//           fontSize="12px"
//           fontStyle="normal"
//           fontWeight="500"
//           lineHeight=" 18px"
//         >
//           Open Help Center
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default Sidebar;
