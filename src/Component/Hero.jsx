import React from "react";
import { Link } from "react-router-dom";
import video from "../img/video2.mp4";

const Hero = () => {
  return (
    <div>
      <div className="block relative w-full h-full text-white xxl:hidden">
        <div className="absolute w-full h-full bg-gray-900 opacity-60"></div>
        <video src={video} width="full" autoPlay loop muted></video>
        <div className="absolute inset-0 flex justify-between items-center mx-10">
          <div className="px-4 pt-14 tracking-widest md:left-10 md:max-w-[700px]">
            <h1 className="text-2xl tracking-wide font-bold sm:text-5xl md:text-4xl lg:text-5xl">
              Strike and Crisis Staffing for Healthcare Facilities
            </h1>
            <button className="font-bold py-2 px-4 mt-2 text-sm hidden sm:block md:text-lg md:mt-5 bg-primary hover:bg-blue-600 shadow-md shadow-gray-900 rounded">
              <Link to="/ClientSolutions">LEARN MORE</Link>
            </button>
          </div>
          <div className="px-4 pt-20 xs:hidden md:block md:max-w-[500px] lg:max-w-[600px]">
            <p className="text-lg font-lato tracking-wide lg:text-2xl">
              HCSS specializes in healthcare staffing, healthcare facility
              strikes and emergency staffing needs. With over 30 years
              experience we have helped staff some of the largest and most
              complicated healthcare strikes. We specialize in staffing hard to
              fill assignments with qualified healthcare professionals that have
              proven experience in the positions they are assigned to, to care
              for your patients.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden relative w-full h-full text-white xxl:block">
        <div className="w-full h-[900px] bg-gray-900"></div>
        <div className="absolute inset-0 flex justify-between items-center mx-96">
          <div className="px-4 pt-14 tracking-widest md:left-10 md:max-w-[700px]">
            <h1 className="text-2xl tracking-wide font-bold sm:text-5xl md:text-4xl lg:text-5xl">
              Strike and Crisis Staffing for Healthcare Facilities
            </h1>
            <button className="font-bold py-2 px-4 mt-2 text-sm hidden sm:block md:text-lg md:mt-5 bg-primary hover:bg-blue-600 shadow-md shadow-gray-900 rounded">
              LEARN MORE
            </button>
          </div>
          <div className="px-4 pt-20 xs:hidden md:block md:max-w-[500px] lg:max-w-[600px]">
            <p className="text-lg font-lato tracking-wide lg:text-2xl">
              HCSS specializes in healthcare staffing, healthcare facility
              strikes and emergency staffing needs. With over 30 years
              experience we have helped staff some of the largest and most
              complicated healthcare strikes. We specialize in staffing hard to
              fill assignments with qualified healthcare professionals that have
              proven experience in the positions they are assigned to, to care
              for your patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
