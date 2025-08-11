import React from "react";
import Navbar from "../Component/Navbar";
import HeroPage from "../Component/HeroPage";
import Footer from "../Component/Footer";
import MissionVision from "../Layout/ClientSolutions/MissionVision";

const ClientSolutions = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroPage title="CLIENT SOLUTIONS" />
      <MissionVision />
      <Footer />
    </div>
  );
};

export default ClientSolutions;
