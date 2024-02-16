import React from "react";
import Pool from "../assets/pool.svg";
import Building from "../assets/building.svg";
import Office from "../assets/office.svg";

function Card() {
  return (
    <div className="card-main m-16 md:flex md:justify-around md:gap-7 ">
      <div className="bg-gray-100 mb-5 md:flex-1 shadow-2xl">
        <div className="flex flex-col items-end p-5 text-3xl">
          <h5>HOUSES</h5>
          <p>The best houses in the city.</p>
        </div>
        <img src={Building} alt="building" className="w-32 md:w-40" />
      </div>
      <div className="bg-gray-100 mb-5 md:flex-1 shadow-2xl">
        <div className="flex flex-col items-end p-5 text-3xl">
          <h5>INTERIORS</h5>
          <p>Can customize the interiors.</p>
        </div>
        <img src={Office} alt="office" className="w-32 md:w-44" />
      </div>
      <div className="bg-gray-100 mb-5 md:flex-1 shadow-2xl">
        <div className="flex flex-col items-end p-5 text-3xl">
          <h5>VILLAS</h5>
          <p>Best villas to offer.</p>
        </div>
        <img src={Pool} alt="pool" className="w-32 md:w-40" />
      </div>
    </div>
  );
}

export default Card;
