import React from "react";

function Banner() {
  return (
    <div className="banner-main flex flex-col items-center md:flex-row md:justify-around md:py-9 md:h-[28rem]">
      <div className="text-center my-5 relative w-[20rem]">
        <h1 className="text-[12rem] text-[#754400] opacity-30 ">
          412
        </h1>
        <p className="text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap">SQUARE AREA</p>
      </div>
      <div className="text-center my-5 relative w-[20rem]">
        <h1 className="text-[12rem] text-[#754400] opacity-30">
          519
        </h1>
        <p className="text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap">CAR PARKING</p>
      </div>
      <div className="text-center my-5 relative w-[20rem]">
        <h1 className="text-[12rem] text-[#754400] opacity-30">
          170
        </h1>
        <p className="text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap">APARTMENTS</p>
      </div>
      <div className="text-center my-5 relative w-[20rem]">
        <h1 className="text-[12rem] text-[#754400] opacity-30">
          262
        </h1>
        <p className="text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap">ROOMS</p>
      </div>
    </div>
  );
}

export default Banner;
