import React from "react";
import HorizontalCard from "../../Component/HorizontalCard";
import { NavLink } from "react-router-dom";

const Join = () => {
  return (
    <div className="relative h-full w-full mt-[100px] py-[50px] bg-gray-800">
      <div className="relative flex flex-wrap flex-col md:flex-row justify-around xs:mx-[30px] md:mx-[50px] lg:mx-[50px] my-[30px] xxl:w-[1920px] xxl:mx-auto">
        <div className="flex flex-col justify-center w-full max-w-md mb-8 mx-auto">
          <p className="text-3xl font-bold tracking-widest pb-5 text-primary">
            HEALTHCARE WORKERS
          </p>
          <p className="text-xl pb-5 text-white h[150px]">
            If you are an experienced healthcare professional, please click
            below for more information <b>regarding joining HCSS' team.</b>
          </p>
          <NavLink
            to="FindWork"
            className="text-center px-5 py-2 w-full lg:max-w-[100%] bg-primary text-white rounded-lg font-semibold hover:bg-blue-500 shadow-md shadow-gray-900 cursor-pointer"
          >
            WORKERS FIND OUR MORE
          </NavLink>
        </div>
        <div className="flex flex-col justify-center w-full max-w-md mb-8 mx-auto">
          <p className="text-3xl font-bold tracking-widest pb-5 text-primary">
            HEALTHCARE WORKERS
          </p>
          <p className="text-xl pb-5 text-white h[150px]">
            If you are an experienced healthcare professional that is already
            part of our team and would like to <b>access your account.</b>
          </p>
          <a
            href="https://hcss.blueskymss.com/Login.html?redirectUrl="
            target="_blank"
            className="text-center px-5 py-2 w-full lg:max-w-[100%] bg-primary text-white rounded-lg font-semibold hover:bg-blue-500 shadow-md shadow-gray-900 cursor-pointer"
          >
            LOGIN HERE
          </a>
        </div>

        {/* <div className="block md:hidden w-full border-b-2 border-black mb-5 md:mb-0"></div> */}
        <div className="flex flex-col justify-center w-full max-w-md mb-8 mx-auto">
          <p className="text-3xl font-bold tracking-widest pb-5 text-primary">
            HEALTHCARE FACILITIES
          </p>
          <p className="text-xl pb-5 text-white h[100px]">
            Healthcare facility representative - please click below for
            information on how HCSS can <b>fill your urgent staffing needs. </b>
          </p>
          <NavLink
            to="ClientSolutions"
            className="text-center px-5 py-2 w-full lg:max-w-[100%] bg-primary text-white rounded-lg font-semibold hover:bg-blue-500 shadow-md shadow-gray-900 cursor-pointer"
          >
            WORKERS FIND OUR MORE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Join;
