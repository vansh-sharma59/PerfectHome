import React from "react";
import Team1 from "../assets/team-img-1.jpg";
import Team2 from "../assets/team-img-2.jpg";
import Team3 from "../assets/team-img-3.jpg";

function Team() {
  return (
    <div className="bg-[#1f080b] p-[3rem]">
      <div className="lg:my-[4rem]">
        <h1 className="text-white text-center font-semibold text-4xl sm:text-5xl">
          MEET THE TEAM
        </h1>
        <p className="text-[#8B4000] text-center font-medium text-3xl mb-[2rem] sm:text-4xl">
          THE FACES BEHIND PERFECTHOME
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-around">
        <div className="mt-[1rem]">
          <div className="w-[20rem] h-[28rem] m-auto md:w-[25rem] md:h-[35rem] lg:w-[30rem] lg:h-[45rem]">
            <img
              src={Team1}
              alt="team"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <h3 className="text-white text-center mt-4 md:text-2xl">
            DARRELL BERGES
          </h3>
          <h3 className="text-[#8B4000] text-center md:text-2xl md:mb-[2rem]">
            ARCHITECT
          </h3>
        </div>
        <div className="mt-[1rem]">
          <div className="w-[20rem] h-[28rem] m-auto md:w-[25rem] md:h-[35rem] lg:w-[30rem] lg:h-[45rem]">
            <img
              src={Team2}
              alt="team"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <h3 className="text-white text-center mt-4 md:text-2xl">
            MERRIN DARDENNE
          </h3>
          <h3 className="text-[#8B4000] text-center md:text-2xl md:mb-[2rem]">
            ARCHITECT
          </h3>
        </div>
        <div className="mt-[1rem]">
          <div className="w-[20rem] h-[28rem] m-auto md:w-[25rem] md:h-[35rem] lg:w-[30rem] lg:h-[45rem]">
            <img
              src={Team3}
              alt="team"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <h3 className="text-white text-center mt-4 md:text-2xl">
            IVET HOUZE
          </h3>
          <h3 className="text-[#8B4000] text-center md:text-2xl md:mb-[2rem]">
            ARCHITECT ASSISTANT
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Team;
