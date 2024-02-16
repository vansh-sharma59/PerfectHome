import React from "react";
import Apartment from "../assets/apartment.jpg";
import FAQ from "./FAQ";

function Neighborhood() {
  return (
    <div className="md:flex md:items-center">
      <div className="my-5 md:w-[50%]">
        <h1 className="text-4xl text-center font-medium p-2 md:text-6xl">
          NEIGHBOURHOOD IN YOUR AREA IS WONDERFUL
        </h1>
        <h5 className="text-3xl py-6 text-center text-[#754400] md:text-4xl md:py-10">
          TOUCH OF PERFECTION
        </h5>
        <div>
          <FAQ />
        </div>
      </div>
      <div className="md:h-[67rem] md:w-[50%]">
        <img
          src={Apartment}
          alt="apartment"
          className="h-[35rem] w-full object-cover md:h-[100%]"
        />
      </div>
    </div>
  );
}

export default Neighborhood;
