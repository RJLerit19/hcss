import React from "react";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation(); // Empty dependency array ensures this runs only once on mount
  return (
    <div className="relative w-full h-full bg-gray-800 py-10 mt-[80px] text-white">
      <ul className="flex flex-wrap items-center justify-center cursor-pointer">
        <li className="px-5 border-l-2 border-r-2 border-gray-500">
          <Link
            to="/"
            className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
          >
            HOME
          </Link>
        </li>
        <li className="px-5 xs:border-l-2 md:border-l-0 border-r-2 border-gray-500">
          <Link
            to="/FindWork"
            className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
          >
            FIND WORK
          </Link>
        </li>
        <li className="px-5 xs:border-l-2 md:border-l-0 border-r-2 border-gray-500">
          <Link
            to="/ClientSolutions"
            className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
          >
            CLIENT SOLUTIONS
          </Link>
        </li>
        <li className="px-5 xs:border-l-2 md:border-l-0 border-r-2 border-gray-500">
          <Link
            to="/ContactUs"
            className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
          >
            CONTACT US
          </Link>
        </li>
        <li className="px-5 xs:border-l-2 md:border-l-0 border-r-2 border-gray-500">
          <Link
            to="/CAPrivacyPolicy"
            className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
          >
            CA PRIVACY POLICY
          </Link>
        </li>
        <li className="px-5 xs:border-l-2 md:border-l-0 border-r-2 border-gray-500">
          <Link
            to="/PrivacyPolicy"
            className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
          >
            PRIVACY POLICY
          </Link>
        </li>
      </ul>
      <p className="text-center mt-5">
        Copyright © 2020 HealthCare Staffing Solutions, Inc. - All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
