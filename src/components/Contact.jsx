import React from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  TextField,
} from "@mui/material";
import ScreenContainer from "../../commonComponent/ScreenContainer";
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
      <ScreenContainer backgroundColor="#F5F7FA" component={"section"} shrink>
        <Box py={{ xs: 4, md: 12 }} width={"100%"}>
          <Typography
            fontSize={{ xs: 24, md: 30 }}
            fontWeight={600}
            width={"100%"}
            textAlign={"center"}
          >
            Contact Us
          </Typography>
          <Box
            display={"flex"}
            gap={0}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"start"}
            flexWrap={"wrap"}
          >
            {/* Content for contact section */}
          </Box>
        </Box>
      </ScreenContainer>
      <Footer />
    </Box>
  );
};

export default Contact;
