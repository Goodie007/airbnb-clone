import React, { useState } from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import DashboardWrapper from "@/components/DashboardWrapper";
import LowerNavbar from "@/components/subnavbar/LowerNavbar";
import Picture from "../../assets/imgs/style3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { homeListing } from "@/components/HomeListingItems";
import { Icon } from "@/assets/icons/Icon";
import Pink from "@/assets/imgs/pinkie.png";

export default function DashboardScreen({ children }: any) {
  const [selectedMode, setSelectedMode] = useState<any>(null);
  const [active, setActive] = useState(false);
  return (
    <Box>
      <DashboardWrapper>
        <HStack
          paddingLeft={10}
          paddingRight={14}
          width={"100%"}
          justifyContent={"space-between"}
          paddingTop={24}
          display={{base: 'none', md: 'none', lg: 'flex'}}
         
        >
          <Box width={300} borderRadius={10} >
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
                      <Box
                        onClick={() => {
                          setActive(true);
                          setSelectedMode(!selectedMode);
                        }}
                        paddingLeft={"260px"}
                        paddingTop={"15px"}
                        borderRadius={10}
                      >
                        {/*  {items.icon({
                          color: active === selectedMode ? "grey" : "#FF385C",
                        })} */}
                        {/* <Box
                          width={'30px'}
                          height={'30px'}
                          borderRadius={'30px'}
                          bgColor={active === selectedMode ? "#FF385C" : "grey" }
                        >
                          <Icon type="heart" />
                        </Box> */}
                        {active === selectedMode ? (
                          <Image
                            src={Pink?.src}
                            width={"24px"}
                            height={"24px"}
                            alt="pink"
                          />
                        ) : (
                          <Icon type="heart" />
                        )}
                      </Box>
                    </Box>
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={"600"}>
                        {items.location}
                      </Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={"15px"}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={"600"}>{items.amount}</Text>
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
                    >
                       <Box
                        onClick={() => {
                          setActive(true);
                          setSelectedMode(!selectedMode);
                        }}
                        paddingLeft={"260px"}
                        paddingTop={"15px"}
                        borderRadius={10}
                      >
                        {/*  {items.icon({
                          color: active === selectedMode ? "grey" : "#FF385C",
                        })} */}
                        {/* <Box
                          width={'30px'}
                          height={'30px'}
                          borderRadius={'30px'}
                          bgColor={active === selectedMode ? "#FF385C" : "grey" }
                        >
                          <Icon type="heart" />
                        </Box> */}
                        {active === selectedMode ? (
                          <Image
                            src={Pink?.src}
                            width={"24px"}
                            height={"24px"}
                            alt="pink"
                          />
                        ) : (
                          <Icon type="heart" />
                        )}
                      </Box>
                    </Box>
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={"600"}>
                        {items.location}
                      </Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={"15px"}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={"600"}>{items.amount}</Text>
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
                    >
                       <Box
                        onClick={() => {
                          setActive(true);
                          setSelectedMode(!selectedMode);
                        }}
                        paddingLeft={"260px"}
                        paddingTop={"15px"}
                        borderRadius={10}
                      >
                        {/*  {items.icon({
                          color: active === selectedMode ? "grey" : "#FF385C",
                        })} */}
                        {/* <Box
                          width={'30px'}
                          height={'30px'}
                          borderRadius={'30px'}
                          bgColor={active === selectedMode ? "#FF385C" : "grey" }
                        >
                          <Icon type="heart" />
                        </Box> */}
                        {active === selectedMode ? (
                          <Image
                            src={Pink?.src}
                            width={"24px"}
                            height={"24px"}
                            alt="pink"
                          />
                        ) : (
                          <Icon type="heart" />
                        )}
                      </Box>
                    </Box>
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={"600"}>
                        {items.location}
                      </Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={"15px"}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={"600"}>{items.amount}</Text>
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
                    >
                       <Box
                        onClick={() => {
                          setActive(true);
                          setSelectedMode(!selectedMode);
                        }}
                        paddingLeft={"260px"}
                        paddingTop={"15px"}
                        borderRadius={10}
                      >
                        {/*  {items.icon({
                          color: active === selectedMode ? "grey" : "#FF385C",
                        })} */}
                        {/* <Box
                          width={'30px'}
                          height={'30px'}
                          borderRadius={'30px'}
                          bgColor={active === selectedMode ? "#FF385C" : "grey" }
                        >
                          <Icon type="heart" />
                        </Box> */}
                        {active === selectedMode ? (
                          <Image
                            src={Pink?.src}
                            width={"24px"}
                            height={"24px"}
                            alt="pink"
                          />
                        ) : (
                          <Icon type="heart" />
                        )}
                      </Box>
                    </Box>
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={"600"}>
                        {items.location}
                      </Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={"15px"}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={"600"}>{items.amount}</Text>
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
          display={{base: 'none', md: 'none', lg: 'flex'}}
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
                      <Text fontSize={16} fontWeight={"600"}>
                        {items.location}
                      </Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={"15px"}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={"600"}>{items.amount}</Text>
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
        {/* 768px */}
        <HStack
          paddingLeft={10}
          paddingRight={14}
          width={"100%"}
          justifyContent={"space-between"}
          paddingTop={24}
          display={{base: 'none', md: 'flex', lg: 'none'}}
         
        >
          <Box width={300} borderRadius={10} >
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
                      <Box
                        onClick={() => {
                          setActive(true);
                          setSelectedMode(!selectedMode);
                        }}
                        paddingLeft={"260px"}
                        paddingTop={"15px"}
                        borderRadius={10}
                      >
                        {/*  {items.icon({
                          color: active === selectedMode ? "grey" : "#FF385C",
                        })} */}
                        {/* <Box
                          width={'30px'}
                          height={'30px'}
                          borderRadius={'30px'}
                          bgColor={active === selectedMode ? "#FF385C" : "grey" }
                        >
                          <Icon type="heart" />
                        </Box> */}
                        {active === selectedMode ? (
                          <Image
                            src={Pink?.src}
                            width={"24px"}
                            height={"24px"}
                            alt="pink"
                          />
                        ) : (
                          <Icon type="heart" />
                        )}
                      </Box>
                    </Box>
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={"600"}>
                        {items.location}
                      </Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={"15px"}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={"600"}>{items.amount}</Text>
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
                    >
                       <Box
                        onClick={() => {
                          setActive(true);
                          setSelectedMode(!selectedMode);
                        }}
                        paddingLeft={"260px"}
                        paddingTop={"15px"}
                        borderRadius={10}
                      >
                        {/*  {items.icon({
                          color: active === selectedMode ? "grey" : "#FF385C",
                        })} */}
                        {/* <Box
                          width={'30px'}
                          height={'30px'}
                          borderRadius={'30px'}
                          bgColor={active === selectedMode ? "#FF385C" : "grey" }
                        >
                          <Icon type="heart" />
                        </Box> */}
                        {active === selectedMode ? (
                          <Image
                            src={Pink?.src}
                            width={"24px"}
                            height={"24px"}
                            alt="pink"
                          />
                        ) : (
                          <Icon type="heart" />
                        )}
                      </Box>
                    </Box>
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={"600"}>
                        {items.location}
                      </Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={"15px"}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={"600"}>{items.amount}</Text>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </HStack>
        {/* mobile*/}
        <HStack
          paddingLeft={4}
          paddingRight={4}
          width={"100%"}
          justifyContent={"space-between"}
          paddingTop={20}
          display={{base: 'flex', md: 'none', lg: 'none'}}
         
        >
          <Box width={'100%'} borderRadius={10} >
            <Swiper
              spaceBetween={2}
              scrollbar={{ draggable: true }}
              slidesPerView={1}
              pagination={true}
            >
              {homeListing.map((items: any) => {
                return (
                  <SwiperSlide key={items}>
                    <Box
                      bgImage={items.image?.src}
                      // width={350}
                      height={250}
                      width={'100%'}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundBlendMode={"screen"}
                      backgroundSize={"cover"}
                      position={"relative"}
                      overflowX={"hidden"}
                      borderRadius={10}
                    >
                      <Box
                        onClick={() => {
                          setActive(true);
                          setSelectedMode(!selectedMode);
                        }}
                        // paddingLeft={"250px"}
                        // paddingTop={"15px"}
                        borderRadius={10}
                        position={'absolute'}
                        top={2}
                        right={4}
                      >
                        {/*  {items.icon({
                          color: active === selectedMode ? "grey" : "#FF385C",
                        })} */}
                        {/* <Box
                          width={'30px'}
                          height={'30px'}
                          borderRadius={'30px'}
                          bgColor={active === selectedMode ? "#FF385C" : "grey" }
                        >
                          <Icon type="heart" />
                        </Box> */}
                        {active === selectedMode ? (
                          <Image
                            src={Pink?.src}
                            width={"24px"}
                            height={"24px"}
                            alt="pink"
                          />
                        ) : (
                          <Icon type="heart" />
                        )}
                      </Box>
                    </Box>
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={"600"}>
                        {items.location}
                      </Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={"15px"}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={"600"}>{items.amount}</Text>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </HStack>
        <HStack
          paddingX={'20px'}
          paddingRight={0}
          width={"100%"}
          justifyContent={"space-between"}
          paddingTop={4}
          display={{base: 'flex', md: 'none', lg: 'none'}}
         
        >
          <Box width={280} borderRadius={10} >
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
                      height={250}
                      width={280}
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundBlendMode={"screen"}
                      backgroundSize={"cover"}
                      position={"relative"}
                      overflowX={"hidden"}
                      borderRadius={10}
                    >
                      <Box
                        onClick={() => {
                          setActive(true);
                          setSelectedMode(!selectedMode);
                        }}
                        paddingLeft={"250px"}
                        paddingTop={"15px"}
                        borderRadius={10}
                      >
                        {/*  {items.icon({
                          color: active === selectedMode ? "grey" : "#FF385C",
                        })} */}
                        {/* <Box
                          width={'30px'}
                          height={'30px'}
                          borderRadius={'30px'}
                          bgColor={active === selectedMode ? "#FF385C" : "grey" }
                        >
                          <Icon type="heart" />
                        </Box> */}
                        {active === selectedMode ? (
                          <Image
                            src={Pink?.src}
                            width={"24px"}
                            height={"24px"}
                            alt="pink"
                          />
                        ) : (
                          <Icon type="heart" />
                        )}
                      </Box>
                    </Box>
                    <HStack
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      paddingTop={1}
                    >
                      <Text fontSize={16} fontWeight={"600"}>
                        {items.location}
                      </Text>
                      <HStack>
                        {items.star}
                        <Text>{items.ratings}</Text>
                      </HStack>
                    </HStack>

                    <Text fontSize={"15px"}>{items.title}</Text>
                    <Text>{items.date}</Text>
                    <Text fontWeight={"600"}>{items.amount}</Text>
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
