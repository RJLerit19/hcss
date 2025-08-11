import React from "react";
import Navbar from "../Component/Navbar";
import HeroPage from "../Component/HeroPage";
import Footer from "../Component/Footer";
import CAPrivacyPolicyLayout from "../Layout/CAPrivacyPolicy/CAPrivacyPolicyLayout";
const CAPrivacyPolicy = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroPage title="CALIFORNIA PRIVACY POLICY" />
      <CAPrivacyPolicyLayout />
      <Footer />
    </div>
  );
};

export default CAPrivacyPolicy;
