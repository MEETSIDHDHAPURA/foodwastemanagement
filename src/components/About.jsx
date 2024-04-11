import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import about from "../assets/about.jpeg";
const About = () => {
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
          About
        </Typography>
        {/* <Breadcrumbs>
          <Link fontSize={"14px"} href="/home" color={"white"} gap={"8"}>
            Home
          </Link>
          <Typography fontSize={"14px"} color={"white"}>
            Gallery
          </Typography>
        </Breadcrumbs> */}
      </Box>
      <Box
      sx={{display:"flex",px:"100px", alignItems:"center", gap:"90px"}}>
        <Box sx={{width:"40%"}}>
          <img src={about} alt="image" className="mx-[15px] my-[30px]  w-full h-auto rounded-full "
            style={{ aspectRatio: "1/1", objectFit: "cover" }}/>
        </Box>
        <Box sx={{width:"50%", mx:"30px", my:"20px" }}>
          <p className="text-orange-500 text-xl">About us</p>
          <br/>
          <h1 className="text-blue-950 font-bold text-4xl">We're for social causes</h1>
          <br/>
          <h3  className="text-blue-950 font-bold text-lg">
            Hunger is not a problem. It is an obscenity. How wonderful it is
            that nobody need wait a single moment before starting to improve the
            world. – Anne Frank.
          </h3>
          <br/>
          <p className="text-gray-400">
            No Food Waste is an organisation which aims to redistribute excess
            food from weddings, parties, events to those who are hungry..<br/><br/>
            The idea took root in Coimbatore, where we started with 2 Shopper
            Bags and a volunteer to collect the surplus food and deliver to the
            homeless through Public Transportation System from October 16th,
            2014. We took an oath on that day to stop food waste and satisfy the
            hunger of many, in a quest to make the “World Hunger Free.
          </p>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
