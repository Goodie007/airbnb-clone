import React from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Logo from "../assets/imgs/Airbnb.png";
import Med from "../assets/imgs/airbnbMedium.png"
import { colors } from "@/theme";
import { Icon } from "@/assets/icons/Icon";

export default function Navbar() {
  return (
    <Box
      position={"fixed"}
      width={"100%"}
      paddingX={{ base: 4, md: 0, lg: 10 }}
      paddingY={{ base: 3, md: 0, lg: 0 }}
      zIndex={{base: 1000, md: 1000, lg: 1000}}
      bgColor={'#FFF'}
    >
      <HStack
        height={"80px"}
        bgColor={"#FFF"}
        paddingY={"25px"}
        justifyContent={"space-between"}
        display={{ base: "none", md: "flex", lg: "flex" }}
      >
        <Image
          src={Logo?.src}
          width={100}
          height={"30px"}
          alt={"logo"}
          display={{ base: "none", md: "none", lg: "flex" }}
        />
         <Image
          src={Med?.src}
          width={100}
          height={"50px"}
          alt={"logo"}
          display={{ base: "none", md: "flex", lg: "none" }}
        />
        <HStack
          width={{base: 0, md: '50%', lg: "30%"}}
          borderWidth={1}
          bgColor={"#FFF"}
          height={"50px"}
          borderRadius={25}
          paddingLeft={{base: 2, md: 4, lg: 10}}
          boxShadow={"base"}
        >
          <Box
            bgColor={"#FFF"}
            height={"30px"}
            paddingY={"3px"}
            width={"28%"}
            borderRightWidth={1}
            // borderColor={colors.grey}
            paddingLeft={3}
          >
            <Text fontWeight={"500"} fontSize={{ md: 14}} >Anywhere</Text>
          </Box>
          <Box
            bgColor={"#FFF"}
            height={"30px"}
            paddingY={"3px"}
            width={{md: "28%", lg: '28%'}}
            borderRightWidth={1}
            // borderColor={colors.grey}
            paddingLeft={3}
          >
            <Text fontWeight={"500"} fontSize={{ md: 14}}>Any week</Text>
          </Box>
          <HStack
            justifyContent={"space-between"}
            width={{base: 0, md: '38%', lg: '38%'}}
            paddingLeft={{md: 0, lg: 3}}
          >
            <Box>
              <Text color={colors.grey} display={{base: 'none', md: 'none', lg: 'flex'}}>Add guest</Text>
              <Text color={colors.grey} display={{base: 'none', md: 'flex', lg: 'none'}} fontSize={14}>Add gue...</Text>
            </Box>
            <Box
              bgColor={"#FF385C"}
              width={"35px"}
              height={"35px"}
              padding={"10px"}
              borderRadius={35 / 2}
            >
              <Icon type={"search"} width={16} height={16} color={"#FFFFFF"} />
            </Box>
          </HStack>
        </HStack>
        <HStack
            width={{ md: '45%', lg: '25%'}}
            paddingLeft={10}
            //bgColor={'red'}
        >
          <Box
            bgColor={"#FFF"}
            paddingX={2}
            paddingY={2}
            height={"40px"}
            borderRadius={40}
            _hover={{ bg: "#DCDCDC" }}
          >
            <Text fontWeight={"500"} fontSize={{ md: 14}}>Airbnb your home</Text>
          </Box>
          <Box
            padding={3}
            bgColor={"#FFF"}
            borderRadius={"42px"}
            width={"42px"}
            height={"42px"}
            _hover={{ bg: "#DCDCDC" }}
          >
            <Icon type={"globe"} />
          </Box>
          <HStack
            bgColor={"#FFF"}
            paddingX={"5px"}
            height={"42px"}
            width={"70px"}
            borderRadius={25}
            borderWidth={1}
            _hover={{ boxShadow: "md", bg: "white" }}
          >
            <Icon type={"menu"} />
            <Icon type={"profile"} />
          </HStack>
        </HStack>
      </HStack>
      <HStack
        display={{ base: "flex", md: "none", lg: "none" }}
        width={"100%"}
        height={"55px"}
        borderWidth={1}
        borderRadius={55/2}
        boxShadow={"lg"}
        paddingLeft={4}
       // justifyContent={'space'}
      >
        <Icon type="searchMobile"  color="#000" />
        <HStack
            justifyContent={'space-between'} 
            width={'88%'}
            paddingLeft={2}
        >
        <Box
            alignItems={'flex-start'}
            paddingTop={3}
            paddingBottom={4}
            flexDirection={'column'}
        >
            <Text fontSize={15}>Anywhere</Text>
            <Text fontSize={12}>Any week . Add guests </Text>
        </Box>
        <Box 
            width={10}
            height={10}
            borderRadius={20}
            background={'#FFF'}
            borderWidth={1}
            padding={'10px'}
        >
          <Icon type="plug" />
        </Box>
        </HStack>
      </HStack>
    </Box>
  );
}
