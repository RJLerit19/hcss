import { useState, useEffect } from "react";
import logo from "../img/logo2.jpg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change 100 to your desired scroll position in pixels
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const location = useLocation(); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <nav
        className={`fixed w-full h-24 bg-white text-black shadow-lg shadow-primary z-10 ${
          scrolled ? "opacity-100" : "opacity-80"
        }`}
      >
        <div className="flex justify-between h-full max-w-[1240px] mx-auto px-4">
          <NavLink to="/" className="flex items-center cursor-pointer" href="/">
            <img src={logo} alt="" className="w-full h-full" />
          </NavLink>
          <div className="xs:hidden md:flex">
            <ul className="flex space-x-4 items-center uppercase cursor-pointer">
              <li>
                <NavLink
                  to="/"
                  className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/FindWork"
                  className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
                >
                  Find Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ClientSolutions"
                  className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
                >
                  Client Solutions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ContactUs"
                  className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        onClick={handleNav}
        className="block md:hidden fixed right-4 top-4 z-10"
      >
        {nav ? (
          <AiOutlineClose size={20} color="black" />
        ) : (
          <AiOutlineMenu size={20} color="black" />
        )}
      </div>
      <div
        className={
          nav
            ? "xs:fixed md:hidden top-24 w-full h-auto ease-in-out duration-500 bg-white z-10"
            : "hidden top-0"
        }
      >
        <ul className="uppercase text-black">
          <li className="p-4 border-t border-b border-gray-600">
            <NavLink
              to="/"
              className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
            >
              Home
            </NavLink>
          </li>
          <li className="p-4 border-b border-gray-600">
            <NavLink
              to="/FindWork"
              className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
            >
              Find Work
            </NavLink>
          </li>
          <li className="p-4 border-b border-gray-600">
            <NavLink
              to="/ClientSolutions"
              className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
            >
              Client Solutions
            </NavLink>
          </li>
          <li className="p-4 border-b border-gray-600">
            <NavLink
              to="/ContactUs"
              className="aria-[current=page]:text-primary aria-[current=page]:font-semibold"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
