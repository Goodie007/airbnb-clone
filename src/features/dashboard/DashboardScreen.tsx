import React from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import DashboardWrapper from "@/components/DashboardWrapper";
import LowerNavbar from "@/components/subnavbar/LowerNavbar";
import Picture from '../../assets/imgs/style3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { homeListing } from "@/components/HomeListingItems";

export default function DashboardScreen({ children }: any) {
  return (
    <Box
      
    >
      <DashboardWrapper>
        <Box>
          <HStack>
            <Swiper
               width={201}
               spaceBetween={0}
               scrollbar={{ draggable: true }}
               slidesPerView={1}
            >
              {homeListing.map((items:any) => {
                return (
                  <SwiperSlide key={items}>
                    <Box
                      bgImage={items.image?.src}
                      width={'100%'}
                      height={150}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundBlendMode={'screen'}
                      backgroundSize={'cover'}
                      position={'relative'}
                      overflowX={'hidden'}
                    ></Box>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </HStack>     
        </Box>
      </DashboardWrapper>
    </Box>
  );
}
