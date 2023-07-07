import React from "react";
import { Box, HStack, Text, Flex } from "@chakra-ui/react";
import { Icon } from "@/assets/icons/Icon";

export default function LowerNavbar() {
  return (
    <Box
      bgColor={"transparent"}
      position={"fixed"}
      //paddingTop={100}
      width={"100%"}
      height={50}
      top={{ base: 0, md: 500, lg: 607 }}
      bottom={2}
      borderTopWidth={1}
      paddingLeft={{ base: 4, md: 7, lg: 10 }}
      paddingRight={{ base: 4, md: 5, lg: 10 }}
      paddingTop={{ base: 0, md: 1, lg: 2 }}
    >
      <HStack justifyContent={"space-between"} display={{ base: 'none', md: 'flex', lg: 'flex'}}>
        <HStack 
            flexDirection={{base: 'row', md: 'column', lg: 'row'}}  
        >
          <HStack>
            <Text fontSize={{ base: 12, md: 15, lg: 16 }}>
            ©
              {" "}
              2023 Airbnb, Inc.
            </Text>
            <Text paddingBottom={1}>.</Text>
            <Text fontSize={{ base: 12, md: 14, lg: 16 }}>{" "}Terms </Text>
            <Text paddingBottom={1}>.</Text>
            <Text fontSize={{ base: 12, md: 14, lg: 16 }}>Sitmap</Text>
            <Text paddingBottom={1}>.</Text>
            <Text fontSize={{ base: 12, md: 14, lg: 16 }}>Privacy</Text>
          </HStack>
          <HStack 
            //width={{base:'100%', md: '95%', lg: '100%'}}
            >
            <Text paddingBottom={1} fontSize={{ base: 12, md: 15, lg: 16 }} >.</Text>
            <Text fontSize={{ base: 12, md: 15, lg: 16 }} >
              Your Privacy Choices
            </Text>
            <Box paddingTop={1}>
              <Icon type="privacy" />
            </Box>
            <Text paddingBottom={1}>.</Text>
            <Text fontSize={{ base: 12, md: 14, lg: 16 }}>Destinations</Text>
          </HStack>
        </HStack>
        <HStack>
          <Icon type="globe" />
          <Text fontSize={{ base: 12, md: 14, lg: 16 }} fontWeight={'400'}>English (US)</Text>
          <Text fontSize={{ base: 12, md: 14, lg: 16 }} fontWeight={'400'} >$ USD</Text>
          <Text
            display={"flex"}
            flexDirection={"row"}
            fontSize={{ base: 12, md: 14, lg: 16 }}
            fontWeight={'400'}
            paddingTop={2}
          >
            Support & resources <Icon type={"arrowUp"} />{" "}
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
}