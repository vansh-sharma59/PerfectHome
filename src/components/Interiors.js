import React from "react";
import Livingroom from "../assets/living-room-2.jpg";
import Feather from "../assets/feather.svg";
import Building from "../assets/building.svg";
import Location from "../assets/location.svg";
import overlay from "../assets/home-1-background-patern-3.png";
import icon1 from "../assets/icon-img-1.png";
import icon2 from "../assets/icon-img-2.png";
import icon3 from "../assets/icon-img-3.png";

function Interiors() {
  return (
    <div className="interior-main relative">
      <div className="absolute w-[100%] h-[100%]">
        <img
          src={overlay}
          alt="overlay"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <h1 className="text-center text-[3rem] md:text-[5rem] lg:text-[7rem] lg:mt-[10rem] tracking-wider">
        CUSTOM INTERIORS
      </h1>
      <h4 className="text-center text-[1.4rem] text-[#C88B67] pb-20 md:text-[2.5rem]">
        WE CAN DESIGN CUSTOM BEAUTIFUL INTERIORS
      </h4>
      <div className="w-[35rem] h-[20rem] m-auto bg-[#C88A61] relative md:w-[55rem] md:h-[35rem] lg:w-[100rem] lg:h-[50rem]">
        <img
          src={Livingroom}
          alt="living room"
          className="object-cover w-[100%] h-[100%] absolute md:top-4 md:right-4"
        />
      </div>
      <div className="text-white mt-16  flex flex-col md:flex-row justify-around items-center text-center md:text-3xl">
        <div className="my-10 md:my-24 flex flex-col items-center">
          <div className="border border-[#704D3A] w-[10rem] h-[10rem] rounded-full">
            <img src={icon1} alt="building" className="m-auto w-44 md:mb-2" />
          </div>
          <h3 className="my-5">SMART LIVING</h3>
          <p>Start living the smart way.</p>
        </div>
        <div className="my-10 md:my-24 flex flex-col items-center">
          <div className="border border-[#704D3A] w-[10rem] h-[10rem] rounded-full">
            <img src={icon2} alt="feather" className="m-auto w-44 md:mb-2" />
          </div>
          <h3 className="my-5">ECO CONSTRUCTION</h3>
          <p>Nature friendly construction.</p>
        </div>
        <div className="my-10 md:my-24 flex flex-col items-center">
          <div className="border border-[#704D3A] w-[10rem] h-[10rem] rounded-full">
            <img src={icon3} alt="location" className="m-auto w-44 md:mb-2" />
          </div>
          <h3 className="my-5">THE BEST LOCATION</h3>
          <p>Best location one can get.</p>
        </div>
      </div>
    </div>
  );
}

export default Interiors;
