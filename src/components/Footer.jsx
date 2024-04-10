import { Box } from "@mui/material";
import React from "react";
import Logo from "../assets/OIG1.jpeg";

const Footer = () => {
  return (
    <>
      <Box>
        <div className="sm:flex hidden sm:block md:p-12 md:gap-9 xl:gap-28 md:pt-20 bg-[#EBEBFF] xl:p-20 dark:text-white dark:bg-gray-950 dark:border">
          <div className="md:w-72 xl:w-96 ">
            <Box sx={{display:"flex" , alignItems:"center" , gap:"10px"}}>
              <img alt="" src={Logo} className="size-14 rounded-full "></img>
              <h2 className="md:text-xl text-cyan-600 tracking-widest font-bold xl:text-xl">
                Save & Serve
              </h2>
            </Box>
            <p className="md:pb-3 xl:pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              repellat, architecto explicabo numquam sapiente soluta iusto dicta
              officiis, eum et repudiandae voluptatem, incidunt ratione!
            </p>
            <div className="flex gap-5 ">
              <i className="fa-sharp fa-solid fa-envelope"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="md:py-20 lg:py-0">
            <h1 className="md:w-32 font-bold xl:pb-3 underline underline-offset-4">
              Quick Links
            </h1>
            <li>Home</li>
            <li>About Us</li>
            <li>Shop</li>
            <li>Contact</li>
          </div>
          <div className="md:py-20 lg:py-0">
            <h1 className="font-bold xl:pb-3 underline underline-offset-4 ">
              Contact Us
            </h1>
            <div>
              <h6 className="md:pt-3">+91 6845984589</h6>
              <h6 className="xl:pt-1"> Ahmedabad 4402 Ganesh Glory,</h6>
              <h6 className="xl:pt-1">380081.</h6>
            </div>
          </div>
          <div className="md:py-20 lg:py-0">
            <h6 className="font-bold underline underline-offset-4">
              Subscribe to Our Email
            </h6>
            <h1 className="font-semibold xl:text-xl xl:pt-5">
              For Latest News & Updates
            </h1>
          </div>
        </div>
      </Box>
      <Box className="dark:bg-gray-200 text-white py-3 bg-gray-800 dark:text-black text-center xxs:hidden sm:block">
        All RIGHTS GIVEN BY
        <span className="font-bold text-[#31899f]"> Save & Serve. </span>
      </Box>
    </>
  );
};

export default Footer;
