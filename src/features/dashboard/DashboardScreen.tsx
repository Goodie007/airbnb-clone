import React from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import DashboardWrapper from "@/components/DashboardWrapper";
import LowerNavbar from "@/components/subnavbar/LowerNavbar";
import Picture from "../../assets/imgs/style3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { homeListing } from "@/components/HomeListingItems";
import { Icon } from "@/assets/icons/Icon";

export default function DashboardScreen({ children }: any) {
  return (
    <Box>
      <DashboardWrapper>
        <HStack
          // paddingLeft={'30px'}
          // paddingRight={'50px'}
          paddingLeft={10}
          paddingRight={14}
          width={"100%"}
          justifyContent={"space-between"}
          paddingTop={24}
        >
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
                      width={300}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundBlendMode={"screen"}
                      backgroundSize={"cover"}
                      position={"relative"}
                      overflowX={"hidden"}
                      borderRadius={10}
                    >
                      {/* {items.icon({ color:  })} */}
                    </Box>
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={'600'}>{items.location}</Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={'15px'}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={'600'}>{items.amount}</Text>
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
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={'600'}>{items.location}</Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={'15px'}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={'600'}>{items.amount}</Text>
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
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={'600'}>{items.location}</Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={'15px'}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={'600'}>{items.amount}</Text>
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
                    > </Box>
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={'600'}>{items.location}</Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={'15px'}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={'600'}>{items.amount}</Text>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </HStack>
        <HStack
          paddingX={10}
          width={"100%"}
          justifyContent={"space-between"}
          paddingTop={10}
        >
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
                      width={300}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundBlendMode={"screen"}
                      backgroundSize={"cover"}
                      position={"relative"}
                      overflowX={"hidden"}
                      borderRadius={10}
                    ></Box>
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={'600'}>{items.location}</Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={'15px'}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={'600'}>{items.amount}</Text>
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
                    <Text>{items.location}</Text>
                    <Text>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text>{items.amount}</Text>
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
                    <Text>{items.location}</Text>
                    <Text>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text>{items.amount}</Text>
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
                    <Text>{items.location}</Text>
                    <Text>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text>{items.amount}</Text>
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
