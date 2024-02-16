import React from "react";
import Livingroom from "../assets/living-room.jpg";
import Feather from "../assets/feather.svg";
import Building from "../assets/building.svg";
import Location from "../assets/location.svg";

function Interiors() {
  return (
    <div className="interior-main">
      <h1 className="text-center text-[3rem] md:text-[5rem]">
        CUSTOM INTERIORS
      </h1>
      <h4 className="text-center text-[1.4rem] text-[#754400] pb-20 md:text-[2.5rem]">
        WE CAN DESIGN CUSTOM BEAUTIFUL INTERIORS
      </h4>
      <div className="w-[30rem] h-[18rem] m-auto bg-[#754400] relative md:w-[50rem] md:h-[30rem] lg:w-[75rem] lg:h-[45rem]">
        <img
          src={Livingroom}
          alt="living room"
          className="object-contain absolute top-7 right-7"
        />
      </div>
      <div className="text-white mt-16 flex flex-col items-center text-center md:flex-row md:justify-around md:text-3xl">
        <div className="mb-10">
          <img
            src={Building}
            alt="building"
            className="w-20 m-auto md:w-36 md:mb-2"
          />
          <h3>SMART LIVING</h3>
          <p>Start living the smart way.</p>
        </div>
        <div className="mb-10">
          <img
            src={Feather}
            alt="feather"
            className="w-20 m-auto md:w-36 md:mb-2"
          />
          <h3>ECO CONSTRUCTION</h3>
          <p>Nature friendly construction.</p>
        </div>
        <div className="mb-10">
          <img
            src={Location}
            alt="location"
            className="w-20 m-auto md:w-36 md:mb-2"
          />
          <h3>THE BEST LOCATION</h3>
          <p>Best location one can get.</p>
        </div>
      </div>
    </div>
  );
}

export default Interiors;
