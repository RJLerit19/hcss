import React from "react";
import Navbar from "../Component/Navbar";
import HeroPage from "../Component/HeroPage";
import Apply from "../Layout/FindWork/Apply";
import Footer from "../Component/Footer";

const FindWork = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroPage title="HOSPITAL STRIKE OPPORTUNITIES" />
      <Apply />
      <Footer />
    </div>
  );
};

export default FindWork;
