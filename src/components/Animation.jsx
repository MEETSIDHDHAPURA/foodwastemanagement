import React from "react";
import Samsung from "../assets/Samsung.jpg"
import Squarelogo from "../assets/Squarelogo.jpg"
import Toyota from "../assets/toyota.png"
import Maybach from "../assets/maybach.png"
import NRC from "../assets/NRC.png"
import Kajabi from "../assets/kajabi.jpeg"
import { Box } from "@mui/material";

const Animation = () => {
  return (
      <Box className="move-ing">
        <Box className="Movinglogo">
          <img alt="logo" src={Samsung}></img>
          <img alt="logo" src={Squarelogo}></img>
          <img alt="logo" src={Kajabi}></img>
          <img alt="logo" src={Toyota}></img>
          <img alt="logo" src={Maybach}></img>
          <img alt="logo" src={NRC}></img>
        </Box>
        
        <Box className="Movinglogo">
          <img alt="logo" src={Samsung}></img>
          <img alt="logo" src={Squarelogo}></img>
          <img alt="logo" src={Kajabi}></img>
          <img alt="logo" src={Toyota}></img>
          <img alt="logo" src={Maybach}></img>
          <img alt="logo" src={NRC}></img>
        </Box>
      </Box>
  );
};

export default Animation;
