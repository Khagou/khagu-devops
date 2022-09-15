import React from "react";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Portfolio from "../../pages/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
