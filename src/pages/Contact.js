import { useLayoutEffect } from "react";
import Footer from "../components/Footer";

function Contact() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="h-[100vh] flex justify-center items-center">
        <form className="p-16 bg-[#f8f4f4] lg:min-w-[80rem]">
          <h1 className="text-5xl text-center mb-8 md:text-8xl">
            REQUEST A VISIT
          </h1>
          <input
            type="text"
            placeholder="FULL NAME"
            className="text-2xl my-5 w-full md:text-4xl bg-transparent focus:outline-none focus:border-black focus:border-b-[1px]"
          />
          <br />
          <input
            type="email"
            placeholder="E-MAIL"
            className="text-2xl my-5 w-full md:text-4xl bg-transparent focus:outline-none focus:border-black focus:border-b-[1px]"
          />
          <br />
          <div className="flex justify-between text-2xl my-5 md:text-4xl">
            <input type="date" className="bg-transparent" />{" "}
            <input type="time" className="bg-transparent" />
          </div>
          <textarea
            type="text"
            placeholder="MESSAGE"
            className="text-2xl my-5 w-full md:text-4xl bg-transparent focus:outline-none focus:border-black focus:border-b-[1px]"
            style={{ height: "9rem" }}
          />
          <br />
          <button className="text-3xl w-[100%] p-5 my-3 bg-[#754400] text-white hover:bg-[#754400dc]">
            CONTACT
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
