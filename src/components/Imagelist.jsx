import React from 'react';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import i1 from "../assets/food1.jpg";
import i2 from "../assets/food2.jpg";
import i3 from "../assets/food3.jpg";
import i4 from "../assets/food4.jpg";
import i5 from "../assets/food5.jpg";
import i6 from "../assets/food6.jpg";
import i7 from "../assets/food7.jpg";
import i8 from "../assets/food8.jpg";
import i9 from "../assets/food9.jpg";

const Imagelist = () => {
    const itemData = [
        {
          img: i1,
        },
        {
          img: i2,
        },
        {
          img: i3,
        },
        {
          img: i4,
        },
        {
          img: i5,
        },
        {
          img: i6,
        },
        {
          img: i7,
        },
        {
          img: i8,
        },
        {
          img: i9,
        },
        
      ];
      
    return (
        <ImageList sx={{ width: "90%", height: "90%" ,margin:"10px"}}  cols={3} rowHeight={164} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
}

export default Imagelist;
