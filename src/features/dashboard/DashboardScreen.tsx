import React from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import DashboardWrapper from "@/components/DashboardWrapper";
import LowerNavbar from "@/components/subnavbar/LowerNavbar";
import Picture from "../../assets/imgs/style3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { homeListing } from "@/components/HomeListingItems";

export default function DashboardScreen({ children }: any) {
  return (
    <Box>
      <DashboardWrapper>
        <HStack paddingX={10} width={'100%'} justifyContent={'space-between'} paddingTop={10}>
          <Box width={300} borderRadius={10}>
            <Swiper
              spaceBetween={2}
              scrollbar={{ draggable: true }}
              slidesPerView={1}
            >
              {homeListing.map((items: any) => {
                return (
                  <SwiperSlide key={items}>
                    <Box
                      bgImage={items.image?.src}
                      // width={350}
                      height={300}
                      width={"40%"}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundBlendMode={"screen"}
                      backgroundSize={"cover"}
                      position={"relative"}
                      overflowX={"hidden"}
                      borderRadius={10}
                    ></Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Box width={300} justifyContent={"space-between"} borderRadius={10}>
            <Swiper
              //width={1290}
              //  height={300}
              spaceBetween={2}
              scrollbar={{ draggable: true }}
              slidesPerView={1}
            >
              {homeListing.map((items: any) => {
                return (
                  <SwiperSlide key={items}>
                    <Box
                      bgImage={items.image?.src}
                      // width={350}
                      height={300}
                      width={"100%"}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundBlendMode={"screen"}
                      backgroundSize={"cover"}
                      position={"relative"}
                      overflowX={"hidden"}
                      borderRadius={10}
                    ></Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Box width={300} justifyContent={"space-between"} borderRadius={10}>
            <Swiper
              //width={1290}
              //  height={300}
              spaceBetween={2}
              scrollbar={{ draggable: true }}
              slidesPerView={1}
            >
              {homeListing.map((items: any) => {
                return (
                  <SwiperSlide key={items}>
                    <Box
                      bgImage={items.image?.src}
                      // width={350}
                      height={300}
                      width={"100%"}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundBlendMode={"screen"}
                      backgroundSize={"cover"}
                      position={"relative"}
                      overflowX={"hidden"}
                      borderRadius={10}
                    ></Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Box width={300} justifyContent={"space-between"}>
            <Swiper
              //width={1290}
              //  height={300}
              spaceBetween={2}
              scrollbar={{ draggable: true }}
              slidesPerView={1}
            >
              {homeListing.map((items: any) => {
                return (
                  <SwiperSlide key={items}>
                    <Box
                      bgImage={items.image?.src}
                      // width={350}
                      height={300}
                      width={"100%"}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundBlendMode={"screen"}
                      backgroundSize={"cover"}
                      position={"relative"}
                      overflowX={"hidden"}
                      borderRadius={10}
                    ></Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
            </HStack>
      </DashboardWrapper>
    </Box>
  );
}
