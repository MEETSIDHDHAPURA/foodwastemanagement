import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import OurTeam from "./components/OurTeam";
import Donate from "./components/Donate";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Animation from "./components/Animation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/Animation" element={<Animation />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
