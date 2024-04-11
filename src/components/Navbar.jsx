import React from "react";
import Logo from "../assets/OIG2.png";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
const Navbar = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white",
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
            fontWeight: "900",
            fontSize:"30px",

            color: "#31899f",
          }}
        >
          Save N Serve
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          cursor: "pointer",
          alignItems:"center"
        }}
      >
        <Link to="/Home" className="text-blue-900 hover:text-orange-500">
          <Typography fontWeight={600}>Home</Typography>
        </Link>
        <Link to="/gallery" className="text-blue-900 hover:text-orange-500">
          <Typography fontWeight={600}>Gallery</Typography>
        </Link>
        <Link to="/About" className="text-blue-900 hover:text-orange-500">
          <Typography fontWeight={600}>About</Typography>
        </Link>
        <Link to="/Contact" className="text-blue-900 hover:text-orange-500">
          <Typography fontWeight={600}>Contact</Typography>
        </Link>
        {/* <Link to="/OurTeam" className="text-blue-900 hover:text-orange-500">
          <Typography fontWeight={600}>OurTeam</Typography>
        </Link> */}
        
        <Link to="/FAQs" className="text-blue-900 hover:text-orange-500">
          <Typography fontWeight={600}>FAQ</Typography>
        </Link>
        <button  Link to="/Donate" className=" bg-orange-500 text-white px-5 py-2 rounded-full flex items-center gap-1 hover:bg-blue-900">
        <Typography fontWeight={600}>Donate</Typography>
        <p><FaRegHeart /></p>
        </button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/" className="cursor-pointer text-blue-900 hover:text-orange-500">
          <Typography fontWeight={600}>Login</Typography>
        </Link>
        <Link to="/Registration" className="cursor-pointerb text-blue-900 hover:text-orange-500">
          <Typography fontWeight={600}>Registration</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
