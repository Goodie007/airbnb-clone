import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Box,
  HStack,
  Text,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import {
  Controller,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";
import "swiper/css";
import { navbarItems } from "./SubnavbarItems";
import { Icon } from "@/assets/icons/Icon";
//import '../../styles/Home.module.css'
// import { register } from "swiper/element/bundle";
// register();

export default function SubNavbar() {
  const swiper = useSwiper();
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  //const swiperRef = useRef<any>(null)

  // useEffect(() => {
  //   const swiperContainer = swiperRef.current;
  //   const params = {
  //     navigation: true,
  //     pagination: true,
  //   };

  //   Object.assign({swiperContainer, params});
  //   swiperContainer.initialize([]);
  // }, []);

  return (
    <Box
      position={"fixed"}
      width={"100%"}
      // paddingRight={{ base: 4, md: 0, lg: 2 }}
      paddingY={{ base: 3, md: 0, lg: 0 }}
      // paddingLeft={8}
      paddingX={8}
      height={"80px"}
      zIndex={{ base: 1000, md: 1000, lg: 1000 }}
      borderTopWidth={1}
    >
      <HStack
        height={"80px"}
        bgColor={"#FFF"}
        // paddingTop={"30px"}
        justifyContent={"space-between"}
        display={{ base: "none", md: "flex", lg: "flex" }}
        paddingRight={"30px"}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={12}
          onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          effect="flip"
          direction="horizontal"
          cssMode={true}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {navbarItems.map((navbarItems) => {
            return (
              <>
                <SwiperSlide key={navbarItems.label}>
                  <Box
                    height={"70px"}
                    alignItems={"center"}
                    _hover={{
                      borderBottomWidth: 2,
                      borderColor: "#000",
                      color: '#000'
                    }}
                    paddingTop={3}
                  >
                    <Text
                      fontSize={12}
                      paddingTop={"30px"}
                      textAlign={"center"}
                      fontWeight={"500"}
                      color={"grey"}
                      _hover={{
                        color: 'black'
                      }}
                    >
                      {navbarItems.label}
                    </Text>
                  </Box>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        <Box
          width={"130px"}
          height={"48px"}
          borderWidth={1}
          padding={2}
          paddingX={"18px"}
          borderRadius={10}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Icon type="plug" />
          <Text fontSize={"13px"} fontWeight={"500"}>
            Filter
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
