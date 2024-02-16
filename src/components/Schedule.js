import React from "react";
import { Link } from "react-router-dom";

function Schedule() {
  return (
    <div className="h-[35rem] p-5 flex flex-col justify-center items-center bg-[#da8563] text-white">
      <h1 className="text-5xl font-medium md:text-7xl">SCHEDULE A VISIT</h1>
      <h4 className="text-xl m-8 text-center md:text-2xl">
        YOU CAN SCHEDULE A VISIT TO OUR OFFICE OR CAN BOOK AN ONLINE APPOINTMENT
        WITH OUT TEAM
      </h4>
      <Link
        to={"/contact"}
        className="bg-white py-5 px-20 text-[#da8563] text-2xl border border-white  hover:text-white hover:bg-[#da8563] hover:border"
      >
        REQUEST
      </Link>
    </div>
  );
}

export default Schedule;
