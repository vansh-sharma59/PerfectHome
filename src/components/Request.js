import React from "react";

const Request = () => {
  return (
    <div>
      <div className="h-[100vh] flex justify-center items-center contact-main">
        <form className="p-16 w-[95rem]">
          <h1 className="text-5xl text-center mb-8 md:text-8xl tracking-widest">
            REQUEST A VISIT
          </h1>
          <p className="text-2xl text-center md:text-3xl text-[#C88A65] tracking-widest mb-20 font-[montserrat]">
            PLEASE FILL OUT THE FORM
          </p>
          <input
            type="text"
            placeholder="FULL NAME"
            className="text-2xl my-5 w-full md:text-4xl bg-transparent focus:outline-none focus:border-black focus:border-b-[1px] font-[montserrat]"
          />
          <br />
          <input
            type="email"
            placeholder="E-MAIL"
            className="text-2xl my-5 w-full md:text-4xl bg-transparent focus:outline-none focus:border-black focus:border-b-[1px] font-[montserrat]"
          />
          <br />
          <div className="flex justify-between text-2xl my-5 md:text-4xl">
            <input type="date" className="bg-transparent font-[montserrat]" />{" "}
            <input type="time" className="bg-transparent font-[montserrat]" />
          </div>
          <textarea
            type="text"
            placeholder="MESSAGE"
            className="text-2xl my-5 w-full md:text-4xl bg-transparent focus:outline-none focus:border-black focus:border-b-[1px] font-[montserrat]"
            style={{ height: "9rem" }}
          />
          <br />
          <div className="text-white  bg-[#C88A65] text-2xl p-1 cursor-pointer w-[25rem] m-auto">
            <div className="border border-white py-5 px-24 text-center">
              CONTACT
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Request;
