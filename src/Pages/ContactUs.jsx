import React from "react";
import Navbar from "../Component/Navbar";
import HeroPage from "../Component/HeroPage";
import Footer from "../Component/Footer";
import ContactForm from "../Layout/ContactUs/ContactForm";

const ContactUs = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroPage title="CONTACT US" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactUs;
