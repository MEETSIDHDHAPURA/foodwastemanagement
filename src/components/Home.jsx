import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import P1 from "../assets/P1.jpg";
import P2 from "../assets/P2.jpg";
import P3 from "../assets/P3.jpg";
import P4 from "../assets/P4.jpg";
// import P5 from "../assets/P5.jpeg";
import chart from "../assets/chart.png";
import Movinganimation from "./Animation";

const data = [ P2, P3, P4];

const Home = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Box>
      <Navbar />
      <Box position="relative" overflow={"hidden"}>
        <Slider {...settings} ref={sliderRef}>
          {data.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`slide-${index}`}
                className="w-full"
                style={{ height: "800px" }}
              />
            </div>
          ))}
        </Slider>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            zIndex: 999,
            color: "white",
          }}
          onClick={goToPrev}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 999,
            color: "white",
          }}
          onClick={goToNext}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Movinganimation />
      <Box sx={{ display: "flex",gap:"50px",mx:"80px",my:"30px" }}>
        <Box sx={{width:"50%"}}>
          <img id="chart" alt="" src={chart}></img>
        </Box>
        <Box id="chart-text" sx={{width:"50%"}}>
          <Typography sx={{fontSize:"20px", fontFamily:550}}>THE BEGINNING</Typography>
          <Typography>Our Approach</Typography>
          <Typography>
            'Aahar' is a brain child of Indore divisional Commissioner Sanjay
            Dubey, ably supported by his son Shantanu Dubey a Tech student at
            IITB and Rakesh Jain director of 'INFOCRATS Web Solutions'. The
            initiative ropes in hoteliers, caterers, bakeries, sweet shops,
            hostels, malls, individuals & NGO's.​Initiative helps
            citizens/people/organization to donate cooked/prepared/ packed food
            to serve to the people in need of food. It works in 3 modes.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
