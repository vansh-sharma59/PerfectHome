import React from "react";
import { useState } from "react";

function Accordion({ title, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 lg:w-[80%] m-auto">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between px-4 py-1 md:py-2 w-full border-black border-b-[1px]"
      >
        <span className="text-xl font-medium lg:text-2xl">{title}</span>
        <svg
          className="fill-[#754400] shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pl-4 pt-3 text-xl lg:text-2xl">{answer}</div>
      </div>
    </div>
  );
}

export default Accordion;
