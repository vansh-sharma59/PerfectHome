import React from "react";
import Pool from "../assets/pool.svg";
import Building from "../assets/building.svg";
import Office from "../assets/office.svg";
import svg1 from "../assets/perfectsvg.svg";
import svg2 from "../assets/perfectsvg2.svg";
import svg3 from "../assets/perfectsvg3.svg";
import arrow from "../assets/arrow.svg";

function Card() {
  return (
    // <div className="card-main my-16 md:flex md:justify-around mx-auto md:gap-7 max-w-[130rem]">
    <div className="grid grid-cols-1  md:grid-cols-3 gap-11 m-14">
      <div className="bg-[#F9FAF2] flex flex-col justify-between mb-5 h-[20rem] md:h-[25rem]">
        <div className="flex flex-col items-end p-5 text-3xl">
          <h5 className="font-medium">HOUSES</h5>
          <p>The best houses in the city.</p>
        </div>
        <div className="flex justify-between">
          <img src={svg1} alt="building" className="w-32 md:w-40 ml-5" />
          <img src={arrow} alt="arrow" className="w-20 md:w-32 mr-5" />
        </div>
      </div>
      <div className="bg-[#F9FAF2] flex flex-col justify-between mb-5 h-[20rem] md:h-[25rem]">
        <div className="flex flex-col items-end p-5 text-3xl">
          <h5 className="font-medium">INTERIORS</h5>
          <p>Can customize the interiors.</p>
        </div>
        <div className="flex justify-between">
          <img src={svg2} alt="building" className="w-32 md:w-44 ml-5" />
          <img src={arrow} alt="arrow" className="w-20 md:w-32 mr-5" />
        </div>
      </div>
      <div className="bg-[#F9FAF2] flex flex-col justify-between mb-5 h-[20rem] md:h-[25rem]">
        <div className="flex flex-col items-end p-5 text-3xl">
          <h5 className="font-medium">VILLAS</h5>
          <p>Best villas to offer.</p>
        </div>
        <div className="flex justify-between">
          <img src={svg3} alt="building" className="w-32 md:w-40 ml-5" />
          <img src={arrow} alt="arrow" className="w-20 md:w-32 mr-5" />
        </div>
      </div>
    </div>
  );
}

export default Card;
