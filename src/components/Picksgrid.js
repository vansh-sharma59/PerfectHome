import React from "react";
import Pick1 from "../assets/pick1.jpg";
import Pick2 from "../assets/pick2.jpg";
import Pick3 from "../assets/pick3.jpg";
import Pick4 from "../assets/pick4.jpg";

function Picksgrid() {
  return (
    <div className="m-[7rem]">
      <h1 className="text-4xl text-center mb-[2rem] sm:text-5xl md:text-6xl lg:text-7xl">
        Reimgining real estate to <br />
        make it easier to unlock.
      </h1>
      <h2 className="text-xl text-center p-3 text-[#C88B67] max-w-[770px] m-auto font-medium md:text-2xl lg:text-3xl">
        Embark on a Real Estate journey with PerfectHome - A Journey marked by
        professionalism, innovation, and success. We invite you to explore our
        portfolio, engage with our team, and discover the possibilites the
        awaits you.
      </h2>
      <div className="aboutgrid">
        <div className="item1">
          <img
            src={Pick1}
            className="w-[100%] h-[100%] object-cover rounded-3xl"
          />
        </div>
        <div className="item2">
          <img
            src={Pick2}
            className="w-[100%] h-[100%] object-cover rounded-3xl"
          />
        </div>
        <div className="item3">
          <img
            src={Pick3}
            className="w-[100%] h-[100%] object-cover rounded-3xl"
          />
        </div>
        <div className="item4">
          <img
            src={Pick4}
            className="w-[100%] h-[100%] object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Picksgrid;
