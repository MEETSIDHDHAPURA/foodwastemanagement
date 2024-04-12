import React from "react";
import { Box, Button, Divider, Typography, TextField } from "@mui/material";
import ScreenContainer from "../components/ScreenContainer";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
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
        color={"white"}
        alignItems={"center"}
      >
        <Typography fontSize={"50px"} fontWeight={"700"}>
          Contact
        </Typography>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Contact;
