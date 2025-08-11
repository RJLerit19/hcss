import React from "react";
import Navbar from "../Component/Navbar";
import HeroPage from "../Component/HeroPage";
import Footer from "../Component/Footer";
import PrivacyPolicyLayout from "../Layout/PrivacyPolicy/PrivacyPolicyLayout";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroPage title="PRIVACY POLICY" />
      <PrivacyPolicyLayout />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
