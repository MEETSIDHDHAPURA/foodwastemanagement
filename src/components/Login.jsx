import React, { useState } from "react";
import Food from "../assets/food3.jpg";
// import logo from "../assets/logo.png";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <div
      className=" Login-color "
      style={{ backgroundImage: `url(${Food})`, backgroundSize: "cover" }}
    >
      <div className="xl:h-[100%] bg-cover grid ">
        <div className="flex justify-between my-[35.9%] xxs:[] xs:my-[27%] md:my-[14.45%] lg:my-[7.3%] mx-10 bg-[#fff] rounded-[2rem] xl:my-[5.5%] xl:mx-36 shadow-2xl">
          <div className="xl:mx-16 xl:my-4">
            <div className="flex px-5 py-2 xs:px-10 xs:py-4">
              {/* <img
              alt=""
              src={""}
              className="size-4 mt-1 lg:size-5 xl:size-6"
            ></img> */}
              <h1 className="text-cyan-600 text-center font-bold md:text-xl xl:text-2xl xl:flex">
                &nbsp; Save N Serve
              </h1>
            </div>
            <form action="/Home">
              <h1 className="text-xl px-4 pt-3 xs:px-10 xs:pt-0 md:text-2xl lg:text-3xl font-bold xl:text-4xl tracking-wider xl:pt-2">
                Get Started
              </h1>
              <h1 className="px-4 py-2 xs:px-10 xl:flex text-xs xl:my-1 xl:px-11 xl:text-sm tracking-wide ">
                Already have an account? &nbsp;
                <a href="/Registration">
                  <h1 className="underline font-bold">Sign Up</h1>
                </a>
              </h1>
              <div className=" px-3 grid grid-cols-1 gap-5 pt-2 xs:px-9 lg:pt-5 xl:pt-0 xl:mt-8 xl:px-10">
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Username"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Email Address"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Password"
                  variant="outlined"
                />
              </div>
              <a href="/">
                <button
                  type="submit"
                  className="px-3 ml-[70%] my-3 text-xs py-1 bg-[#000000e7] text-white rounded-xl lg:px-5 lg:ml-[70%] lg:my-5 xl:py-2 xl:px-7 xl:rounded-full hover:bg-gray-800 hover:duration-500"
                >
                  Login
                </button>
              </a>
              <h1 className="text-xs px-5 pb-5 lg:my-2 xs:px-10 xl:px-11 xl:text-sm">
                By signing up, i agree to the &nbsp;
                <span className="underline decoration-1 underline-offset-2">
                  Term of service
                </span>
                &nbsp; and &nbsp;
                <p className="underline decoration-1 underline-offset-2 inline">
                  Privacy policy
                </p>
              </h1>
            </form>
          </div>
          <div className="my-12 md:mr-8 xl:mr-16 xl:px-5  rounded-3xl hidden md:block">
            <img
              alt=""
              src={Food}
              className=" xl:mt-0 xl:mb-0 w-[100%] h-[90%] rounded-lg "
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
