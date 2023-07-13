import Navbar from "@/components/Navbar";
import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import SubNavbar from "@/components/subnavbar/SubNavbar";
import LowerNavbar from "@/components/subnavbar/LowerNavbar";

export default function DashboardWrapper({children}: any) {
  return (
    <Box
      //height={'150vh'}
     // bgColor={'blue'}
     position={'relative'}
     flexDirection={'column'}
     justifyContent={'space-between'}
    >
      <Navbar />
     
       <Box
        width={'100%'}
        //height={'85px'}
        borderColor={'#DCDCDC'}
        //bgColor={'blue'}
        paddingTop={{base: '79px', md: '79px', lg:'79px'}}
        zIndex={1000}
        
      ></Box>
        <SubNavbar />
      
      {children}
      <LowerNavbar />
    </Box>
  );
}