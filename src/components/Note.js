import React from "react";
import Founder from "../assets/founder.jpg";

function Note() {
  return (
    <div className="m-[7rem] lg:m-[9rem]">
      <h1 className="text-4xl text-[#C88B67] text-center ml-3 mb-[2rem] sm:text-5xl md:text-6xl lg:text-7xl tracking-wider">
        A NOTE FROM THE FOUNDER.
      </h1>
      <div className="lg:flex lg:items-center lg:justify-center container lg:mt-[6rem]">
        <div className="lg:w-[50%]">
          <div className="w-[20rem] h-[28rem] m-auto md:w-[25rem] md:h-[35rem] lg:w-[35rem] lg:h-[50rem] box relative">
            <img
              src={Founder}
              alt="Founder"
              className="w-[100%] h-[100%] object-cover rounded-xl"
            />
            <div className="w-[100%] h-[100%] absolute bg-[#C88B67] top-5 left-4 rounded-xl -z-10"></div>
          </div>
        </div>
        <div className="mt-4 flex items-start">
          <p className="text-2xl text-justify p-5 m-auto max-w-[65rem] lg:text-3xl lg:max-w-[75rem]">
            Welcome to PerfectHome, where we redefine the real estate experience
            with a commitment to excellence and innovation. As a trusted name in
            the industry, we take pride in curating a portfolio that reflects
            our dedication to quality, transparency, and client satisfaction.
            <br />
            <br />
            We are more than just a real estate platform; we are your partners
            in navigating the diverse and dynamic real estate landscape. Our
            team comprises seasoned professionals who bring a wealth of
            experience, market insights, and a passion for exceeding
            expectations.
            <br />
            <br />
            <p className="font-medium">- Kausar Pial</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Note;
