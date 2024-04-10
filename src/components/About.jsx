import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <Box>
      <Navbar/>
      <Typography>This is About </Typography>
      <Footer/>
    </Box>
  )
}

export default About
