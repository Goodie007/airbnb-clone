import React from "react";
import {
  Box,
  HStack,
  Text,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
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

export default function SubNavbar() {
  const swiper = useSwiper();

  const BackButton = () => {
    return (
      <Box
        bgColor={"blue"}
        width={8}
        height={8}
        padding={2}
        borderRadius={15}
        position={"absolute"}
        zIndex={1000}
        // top={400}
        //left={400}
        // right={400}
        // bottom={400}
        onClick={() => swiper.slidePrev}
      >
        <Icon type="back" />
      </Box>
    );
  };

  const ForwardButton = () => {
    return (
      <Box
        bgColor={"blue"}
        width={8}
        height={8}
        padding={2}
        borderRadius={15}
        position={"absolute"}
        zIndex={1000}
        // top={400}
        left={400}
        // right={400}
        // bottom={400}
        onClick={() => swiper.slideNext}
      >
        <Icon type="forward" />
      </Box>
    );
  };

  return (
    <Box
      position={"sticky"}
      width={"100%"}
      paddingX={{ base: 4, md: 0, lg: 10 }}
      paddingY={{ base: 3, md: 0, lg: 0 }}
      height={70}
      bgColor={"red"}
    >
      <HStack
        height={"80px"}
        bgColor={"transparent"}
        paddingY={"25px"}
        justifyContent={"space-between"}
        display={{ base: "none", md: "flex", lg: "flex" }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={12}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          effect="flip"
          direction="horizontal"
          cssMode={true}
          navigation={true}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          <BackButton />

          <ForwardButton />
          {navbarItems.map((navbarItems) => {
            return (
              <>
                <SwiperSlide key={navbarItems.label}>
                  <Text fontSize={12}>{navbarItems.label}</Text>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </HStack>
    </Box>
  );
}
