import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import circle from "../assets/circle.svg"
import profile from "../assets/profile.svg"
const NavBar = () => {
  return (
    <Flex w={'100%'}
      justifyContent={'space-between'}
      pl={'20px'}
      bgColor={'#f5f5f5'}
    >
      <Flex gap={'12px'}
        alignItems={'center'}
      >
        <Image src={circle} alt='circle' w={'20px'} h={'20px'} />
        <Text
          color='black'

          fontFamily='Inter'
          fontSize='16px'
          fontStyle='normal'
          fontWeight='600'
          lineHeight='normal'
        >Category-1</Text>
      </Flex>
      <Box>
        <Image src={profile} alt='circle' />
      </Box>
    </Flex>
  )
}

export default NavBar