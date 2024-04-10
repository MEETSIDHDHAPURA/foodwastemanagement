import React from "react";
import Logo from "../assets/OIG2.png";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "rgba(235, 241, 253,0.898)",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        <img alt="Logo" src={Logo} className="size-14"></img>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#31899f",
          }}
        >
          Save & Serve
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          cursor: "pointer",
        }}
      >
        <Link to="/" className="text-black">
          <Typography fontWeight={600}>Home</Typography>
        </Link>
        <Link to="/About" className="text-black">
          <Typography fontWeight={600}>About</Typography>
        </Link>
        <Link to="/Contact" className="text-black">
          <Typography fontWeight={600}>Contact</Typography>
        </Link>
        <Link to="/OurTeam" className="text-black">
          <Typography fontWeight={600}>OurTeam</Typography>
        </Link>
        <Link to="/Donate" className="text-black">
          <Typography fontWeight={600}>Donate</Typography>
        </Link>
        <Link to="/FAQs" className="text-black">
          <Typography fontWeight={600}>FAQs</Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/Login" className="cursor-pointer">
          <Typography fontWeight={600}>Login</Typography>
        </Link>
        <Link to="/Registration" className="cursor-pointer">
          <Typography fontWeight={600}>Registration</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
