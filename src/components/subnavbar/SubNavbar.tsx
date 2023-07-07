import React from "react";
import {
  Box,
  HStack,
  Text,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { navbarItems } from "./SubnavbarItems";


export default function SubNavbar() {
  return (
    <Box
      position={"sticky"}
      width={"100%"}
      paddingX={{ base: 4, md: 0, lg: 10 }}
      paddingY={{ base: 3, md: 0, lg: 0 }}
    >
      <HStack
        height={"80px"}
        bgColor={"transparent"}
        paddingY={"25px"}
        justifyContent={"space-between"}
        display={{ base: "none", md: "flex", lg: "flex" }}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          effect="flip"
         direction="horizontal"

        >
          {navbarItems.map((navbarItems) => {
            return (
              <SwiperSlide key={navbarItems.label}>
                <Text>{navbarItems.label}</Text>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </HStack>
    </Box>
  );
}
