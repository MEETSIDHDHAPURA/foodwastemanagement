// "use client";
import { Button, Typography,Divider } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
const list = [
  { list: "CS" },
  { list: "IT" },
  { list: "Civil" },
  { list: "Jeel" },
  { list: "Meet" },
  { list: "Xyz" },
];

const faqsData = [
  {
    question: "lorem ipsum dolor sit amet, consectet",
    answer: "lorem ipsum dolor sit amet, consectet",
    categories: "CS",
  },
  {
    question: "lorem ipsum dolor sit amet, consectet",
    answer: "lorem ipsum dolor sit amet, consectet",
    categories: "CS",
  },
  {
    question: "lorem ipsum dolor sit amet, consectet",
    answer: "lorem ipsum dolor sit amet, consectet",
    categories: "CS",
  },
  {
    question: "lorem ipsum dolor sit amet, consectet",
    answer: "lorem ipsum dolor sit amet, consectet",
    categories: "CS",
  },
  {
    question: "lorem ipsum dolor sit amet, consectet",
    answer: "lorem ipsum dolor sit amet, consectet",
    categories: "IT",
  },
  {
    question: "lorem ipsum dolor sit amet, consectet",
    answer: "lorem ipsum dolor sit amet, consectet",
    categories: "Civil",
  },
  {
    question: "lorem ipsum dolor sit amet, consectet",
    
    answer: "lorem ipsum dolor sit amet, consectet",
    categories: "IT",
  },
  {
    question: "lorem ipsum dolor sit amet, consectet",
    answer: "lorem ipsum dolor sit amet, consectet",
    categories: "IT",
  },
];

const FAQs = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleListItemClick = (event, category) => {
    setSelectedCategory(category);
  };

  const filteredFaqs = selectedCategory
    ? faqsData.filter((faq) => faq.categories === selectedCategory)
    : faqsData;

  return (
    <>
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
    FAQ
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
      <Box px={"200px"}>
        <Box display={"flex"} py={"80px"} justifyContent={"space-between"}>
          <Box>
            <Typography fontWeight={600} fontSize={"40px"}>
              Frequently asked questions
            </Typography>
          </Box>
          <Box alignItems={"center"}>
            <FormControl size="small">
              <InputLabel id="demo-simple-select-label">Student</InputLabel>
              <Select
                sx={{ width: "200px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Student"
              >
                <MenuItem value={"meet"}>meet</MenuItem>
                <MenuItem value={"jeel"}>jeel</MenuItem>
                <MenuItem value={"student"}>Student</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display={"flex"} gap={"40px"}>
          <Box sx={{ width: "256px", bgcolor: "background.paper" }}>
            <List
              component="nav"
              aria-label="secondary mailbox folder"
              sx={{
                "& .MuiListItemButton-root": { border: "1px solid lightgray" },
              }}
            >
              {list.map((item, index) => (
                <ListItemButton
                  key={index}
                  sx={{ "& .Mui-selected": { bgcolor: "#3492FF" } }}
                  selected={selectedCategory === item.list}
                  onClick={(event) => handleListItemClick(event, item.list)}
                >
                  <ListItemText primary={item.list} />
                </ListItemButton>
              ))}
            </List>
          </Box>
          <Box width={"648px"}>
            {filteredFaqs.map((item, index) => (
              <Accordion
              id="accordion"
                key={index}
                sx={{
                  "& .Mui-expanded": { bgcolor: "black", color: "white" },
                  boxShadow: "none",
                  border: "1px solid #E9EAF0",
                  marginTop:"24px",
                  ":hover": { boxShadow: "0px 12px 32px 0px #1D20261A" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon  sx={{":hover":{color:"blue"}}}/>}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          <Box
            bgcolor={"#F5F7FA"}
            width={"336px"}
            height={"366px"}
            paddingX={"20px"}
          >
            <Typography
              fontSize={"18px"}
              fontWeight={"500"}
              marginBottom={"8px"}
              marginTop={"20px"}
            >
              Don’t find your answer!
            </Typography>
            <Typography fontSize={"12px"} fontWeight={"400"}>
              Don’t worry, write your question here and our support team will
              help you.
            </Typography>
            <TextField
              size="small"
              id="outlined-basic"
              placeholder="Subject"
              variant="outlined"
              sx={{
                bgcolor: "white",
                marginTop: "24px",
                width: "296px",
                marginBottom: "8px",
              }}
            />
            <TextField
              multiline
              rows={4}
              maxRows={4}
              size="small"
              id="outlined-basic"
              placeholder="Message"
              variant="outlined"
              sx={{ bgcolor: "white", width: "296px", mb: "24px" }}
            />
            <Button
              variant="text"
              sx={{
                bgcolor: "#3492FF",
                color: "white",
                px: 2,
                width: "fit-content",
                ":hover": { bgcolor: "#1672dd" },
                fontSize: "14px",
                textTransform: "capitalize",
                fontWeight: 600,
              }}
            >
              Submit Question
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FAQs;
