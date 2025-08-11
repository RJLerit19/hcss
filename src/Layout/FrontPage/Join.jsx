import React from "react";
import HorizontalCard from "../../Component/HorizontalCard";
import { NavLink } from "react-router-dom";

const Join = () => {
  return (
    <div className="relative h-full w-full mt-[100px] py-[50px] bg-gray-800">
      <div className="relative flex flex-wrap flex-col md:flex-row justify-around xs:mx-[30px] md:mx-[50px] lg:mx-[70px] my-[30px]">
        <div className="flex flex-col justify-center w-full md:w-[40%] xs:mb-5 md:mb-0">
          <p className="text-3xl font-bold tracking-widest pb-5 text-primary">
            HEALTHCARE WORKERS
          </p>
          <p className="text-xl pb-5 text-white">
            If you are an experienced healthcare professional, please click
            below for more information regarding joining HCSS' team.
          </p>
          <NavLink
            to="FindWork"
            className="text-center px-5 py-2 w-full lg:max-w-[50%] bg-primary text-white rounded-lg font-semibold hover:bg-blue-500 shadow-md shadow-gray-900 cursor-pointer"
          >
            WORKERS FIND OUR MORE
          </NavLink>
        </div>
        <div className="block md:hidden w-full border-b-2 border-black mb-5 md:mb-0"></div>
        <div className="flex flex-col justify-center w-full md:w-[40%]">
          <p className="text-3xl font-bold tracking-widest pb-5 text-primary">
            HEALTHCARE WORKERS
          </p>
          <p className="text-xl pb-5 text-white">
            If you are an experienced healthcare professional, please click
            below for more information regarding joining HCSS' team.
          </p>
          <NavLink
            to="ClientSolutions"
            className="text-center px-5 py-2 w-full lg:max-w-[50%] bg-primary text-white rounded-lg font-semibold hover:bg-blue-500 shadow-md shadow-gray-900 cursor-pointer"
          >
            WORKERS FIND OUR MORE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Join;
