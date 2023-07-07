import React from "react";
import { Box, Image } from "@chakra-ui/react";
import DashboardWrapper from "@/components/DashboardWrapper";
import LowerNavbar from "@/components/subnavbar/LowerNavbar";
import Picture from '../../assets/imgs/style3.png'

export default function DashboardScreen({ children }: any) {
  return (
    <Box
      height={'100vh'}
    >
      <DashboardWrapper>
        <Box>
          Hello      
        </Box>
      </DashboardWrapper>
    </Box>
  );
}
