import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-main  flex flex-col justify-center items-center relative">
      <div className="w-[100%] h-[100%] bg-black z-10 absolute opacity-30"></div>
      <h1 className=" text-5xl text-white font-[200] pl-12 z-40 sm:text-7xl sm:pl-20 lg:text-9xl lg:pl-40">
        PERFECT HOME
      </h1>
      <h5 className=" text-3xl text-white font-[200] pl-12 z-40 sm:text-5xl sm:pl-20 lg:text-7xl lg:pl-40">
        OUR MODERN LIVING QUARTERS
      </h5>
      <Link
        to={"/apartments"}
        className="text-4xl p-3 mt-6 w-[11rem] text-white z-40 bg-transparent rounded-lg flex justify-around border border-white hover:scale-110"
      >
        BUY <FaArrowRightLong />
      </Link>
    </div>
  );
}

export default Hero;
