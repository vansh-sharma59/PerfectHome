import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/perfect-home-logo.png";

function Navbar() {
  return (
    <div className="py-5 fixed top-0 left-0 w-[100%] bg-black/35 backdrop-blur-lg z-50 text-white flex justify-between">
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="w-[10rem] ml-12 sm:w-[15rem]" />
      </Link>
      <div className="flex items-center text-xl font-semibold sm:text-2xl">
        <Link to={"/apartments"} className="mr-12">
          Properties
        </Link>
        <Link to={"/about"} className="mr-12">
          AboutUs
        </Link>
        <Link to={"/contact"} className="mr-12">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
