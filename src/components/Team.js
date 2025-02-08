import React from "react";
import Team1 from "../assets/team-img-1.jpg";
import Team2 from "../assets/team-img-2.jpg";
import Team3 from "../assets/team-img-3.jpg";

function Team() {
  return (
    <div className="bg-[#1C0A09] p-[3rem] lg:py-[10rem] team-main">
      <div className="lg:my-[4rem]">
        <h1 className="text-white text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-widest">
          MEET THE TEAM
        </h1>
        <p className="text-[#C88A65] text-center font-medium text-3xl mb-[2rem] sm:text-4xl tracking-wider py-6">
          THE FACES BEHIND PERFECTHOME
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container">
        <div className="mt-[1rem] lg:justify-self-end">
          <div className="w-[20rem] h-[28rem] m-auto md:w-[25rem] md:h-[35rem] lg:w-[35rem] lg:h-[49rem]">
            <img
              src={Team1}
              alt="team"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <h3 className="text-white mt-4 md:text-3xl lg:text-4xl tracking-wider text-center lg:text-left">
            DARRELL BERGES
          </h3>
          <h3 className="text-[#C88A65] md:text-2xl lg:text-3xl md:mb-[2rem] tracking-wider text-center lg:text-left">
            ARCHITECT
          </h3>
        </div>
        <div className="mt-[1rem]">
          <div className="w-[20rem] h-[28rem] m-auto md:w-[25rem] md:h-[35rem] lg:w-[35rem] lg:h-[49rem]">
            <img
              src={Team2}
              alt="team"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <h3 className="text-white mt-4 md:text-3xl lg:text-4xl tracking-wider text-center lg:text-left">
            MERRIN DARDENNE
          </h3>
          <h3 className="text-[#C88A65] md:text-2xl lg:text-3xl md:mb-[2rem] tracking-wider text-center lg:text-left">
            ARCHITECT
          </h3>
        </div>
        <div className="mt-[1rem] lg:justify-self-start">
          <div className="w-[20rem] h-[28rem] m-auto md:w-[25rem] md:h-[35rem] lg:w-[35rem] lg:h-[49rem]">
            <img
              src={Team3}
              alt="team"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <h3 className="text-white mt-4 md:text-3xl lg:text-4xl tracking-wider text-center lg:text-left">
            IVET HOUZE
          </h3>
          <h3 className="text-[#C88A65] md:text-2xl lg:text-3xl md:mb-[2rem] tracking-wider text-center lg:text-left">
            ARCHITECT ASSISTANT
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Team;
