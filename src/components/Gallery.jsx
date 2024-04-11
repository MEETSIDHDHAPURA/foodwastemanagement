import React from "react";
import { Box, Typography, Divider } from "@mui/material";

import Navbar from "./Navbar";

import Imagelist from "./Imagelist";


export default function Gallery() {
  return (
    <Box>
      <Navbar />
      <Divider />
      <Box
        py={"1.5rem"}
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        backgroundColor={"#636285"}
        alignItems={"center"}
      >
        <Typography fontSize={"50px"} fontWeight={"700"} color={"white"}>
          Gallery
        </Typography>
      </Box>
      <Imagelist/>
    </Box>
  );
}
