import React from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/imgs/Airbnb.png";
import { colors } from "@/theme";
import { Icon } from "@/assets/icons/Icon";

export default function Navbar() {
  return (
    <Box position={"fixed"} width={"94%"}>
      <HStack
        height={"80px"}
        bgColor={"transparent"}
        paddingY={"25px"}
        justifyContent={"space-between"}
      >
        <Image
          src={Logo?.src}
          width={100}
          height={"30px"}
          alt={"logo"}
          display={{ base: "none", md: "flex", lg: "flex" }}
        />
        <HStack
          width={"30%"}
          borderWidth={1}
          bgColor={"transparent"}
          height={"50px"}
          borderRadius={25}
          paddingLeft={2}
          boxShadow={'0 0 0 1pxvar(--chakra-colors-dark-background) '}
        >
          <Box
            bgColor={"transparent"}
            height={"30px"}
            paddingY={"3px"}
            width={"28%"}
            borderRightWidth={1}
            // borderColor={colors.grey}
            paddingLeft={3}
          >
            <Text fontWeight={"500"}>Anywhere</Text>
          </Box>
          <Box
            bgColor={"transparent"}
            height={"30px"}
            paddingY={"3px"}
            width={"28%"}
            borderRightWidth={1}
            // borderColor={colors.grey}
            paddingLeft={3}
          >
            <Text fontWeight={"500"}>Any week</Text>
          </Box>
          <HStack justifyContent={'space-between'} width={'38%'} paddingLeft={3}>
            <Box>
              <Text color={colors.grey}>Add guest</Text>
            </Box>
            <Box
                bgColor={'#FF385C'} 
                width={'35px'}
                height={'35px'}
                padding={'10px'}
                borderRadius={35/2}
            >
              <Icon type={"search"} width={16} height={16}  color={ '#FFFFFF'} />
            </Box>
          </HStack>
        </HStack>
        <HStack>
          <Text fontWeight={"500"}>Airbnb your home</Text>
          <Icon type={'glboe'} />
          <HStack>
            <Text>Ham</Text>
            <Text>Icon</Text>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
}
