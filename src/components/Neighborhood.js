import React from "react";
import Apartment from "../assets/apartment2.jpg";
import FAQ from "./FAQ";

function Neighborhood() {
  return (
    <div className="md:flex md:items-center">
      <div className="my-5 md:w-[50%]">
        <h1 className="text-4xl text-center font-medium p-2 md:text-6xl tracking-wider">
          NEIGHBOURHOOD IN <br /> YOUR AREA IS WONDERFUL
        </h1>
        <h5 className="text-3xl py-6 text-center text-[#C88B67] md:text-4xl md:py-10 tracking-wider">
          TOUCH OF PERFECTION
        </h5>
        <div>
          <FAQ />
        </div>
      </div>
      <div className="h-[40rem] md:h-[55rem] lg:h-[67rem] md:w-[50%]">
        <div className="h-[100%] w-[100%] overflow-hidden">
          <img
            data-scroll
            data-scroll-speed="0.1"
            src={Apartment}
            alt="apartment"
            className="h-[100%] w-[100%] object-cover md:object-contain neighbour"
          />
        </div>
      </div>
    </div>
  );
}

export default Neighborhood;
