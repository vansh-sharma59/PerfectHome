import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/perfect-home-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="py-5 fixed top-0 left-0 w-[100%] bg-black/35 backdrop-blur-lg z-50 text-white flex justify-between items-center font-[Montserrat] ">
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="w-[10rem] ml-12 sm:w-[15rem]" />
      </Link>
      <div className="hidden md:flex items-center text-xl font-light sm:text-2xl">
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

      <div onClick={handleClick} className="md:hidden mr-[3rem] z-50">
        {!nav ? <FaBars size={22} /> : <FaTimes size={22} />}
      </div>

      <div
        className={
          !nav
            ? "hidden"
            : "absolute bg-black text-white top-0 w-[100vw] h-[100vh] flex flex-col justify-center items-center"
        }
      >
        <Link
          onClick={handleClick}
          to={"/"}
          className="py-6 text-4xl font-bold"
        >
          Home
        </Link>
        <Link
          onClick={handleClick}
          to={"/apartments"}
          className="py-6 text-4xl font-bold"
        >
          Properties
        </Link>
        <Link
          onClick={handleClick}
          to={"/about"}
          className="py-6 text-4xl font-bold"
        >
          AboutUs
        </Link>
        <Link
          onClick={handleClick}
          to={"/contact"}
          className="py-6 text-4xl font-bold"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
