import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Staffing from "../Layout/FrontPage/Staffing";
import Join from "../Layout/FrontPage/Join";
import Facts from "../Layout/FrontPage/Facts";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <Staffing />
      <Join />
      <Facts />
      <Footer />
    </div>
  );
};

export default Home;
