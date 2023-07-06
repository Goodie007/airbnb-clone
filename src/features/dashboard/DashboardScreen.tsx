import Navbar from "@/components/Navbar";
import React from "react";
import { Box } from "@chakra-ui/react";
import SubNavbar from "@/components/subnavbar/SubNavbar";

export default function DashboardScreen() {
  return (
    <Box>
      <Navbar />
      <Box
        width={'100%'}
        height={'85px'}
        borderBottomWidth={1}
        borderColor={'#DCDCDC'}
      ></Box>
      <SubNavbar />
    </Box>
  );
}
