import Navbar from "@/components/Navbar";
import React from "react";
import { Box } from "@chakra-ui/react";
import SubNavbar from "@/components/subnavbar/SubNavbar";
import LowerNavbar from "@/components/subnavbar/LowerNavbar";

export default function DashboardWrapper({children}: any) {
  return (
    <Box
      //height={'150vh'}
     // bgColor={'blue'}
    >
      <Navbar />
      <Box
        width={'100%'}
        height={'85px'}
        borderBottomWidth={1}
        borderColor={'#DCDCDC'}
      ></Box>
      {/* <SubNavbar /> */}
      {children}
      <LowerNavbar />
    </Box>
  );
}