import React from "react";

function Banner() {
  return (
    <div className="banner-main flex flex-col items-center md:flex-row md:justify-around md:py-9 md:h-[25rem]">
      <div className="text-center my-5 relative w-[20rem]">
        <h1 className="text-8xl text-[#754400] font-extrabold opacity-30">
          412
        </h1>
        <p className="text-4xl absolute top-[30%] left-[9%]">SQUARE AREA</p>
      </div>
      <div className="text-center my-5 relative w-[20rem]">
        <h1 className="text-8xl text-[#754400] font-extrabold opacity-30">
          519
        </h1>
        <p className="text-4xl absolute top-[30%] left-[9%]">CAR PARKING</p>
      </div>
      <div className="text-center my-5 relative w-[20rem]">
        <h1 className="text-8xl text-[#754400] font-extrabold opacity-30">
          170
        </h1>
        <p className="text-4xl absolute top-[30%] left-[9%]">APARTMENTS</p>
      </div>
      <div className="text-center my-5 relative w-[20rem]">
        <h1 className="text-8xl text-[#754400] font-extrabold opacity-30">
          262
        </h1>
        <p className="text-4xl absolute top-[30%] left-[28%]">ROOMS</p>
      </div>
    </div>
  );
}

export default Banner;
