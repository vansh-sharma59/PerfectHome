import React from "react";
import { Link } from "react-router-dom";

function Schedule() {
  return (
    <div className="h-[35rem] md:h-[45rem] p-5 flex flex-col justify-center items-center bg-[#C88A65] text-white">
      <h1 className="text-5xl font-medium md:text-7xl lg:text-[7rem] tracking-wider">SCHEDULE A VISIT</h1>
      <h4 className="text-xl m-8 text-center md:text-2xl">
        YOU CAN SCHEDULE A VISIT TO OUR OFFICE OR CAN BOOK AN ONLINE APPOINTMENT
        WITH OUT TEAM
      </h4>
      <Link
        to={"/contact"}
        className="bg-white  text-[#C88A65] text-2xl border-2 border-white hover:scale-105"
      >
        <div className="border border-[#C88A65] py-5 px-24">
        REQUEST
        </div>
      </Link>
    </div>
  );
}

export default Schedule;
