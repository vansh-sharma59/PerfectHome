import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#19130B] text-white">
      <div className=" p-10 md:flex md:justify-around">
        <div>
          <h2 className="text-3xl my-4 md:text-5xl">FAQ</h2>
          <div className="md:text-2xl">
            <p>How to schedule a viewing?</p>
            <p>Which pricing plan do i pick?</p>
            <p>How to choose the right apartment?</p>
            <p>How long doe the process take?</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl my-4 md:text-5xl">USEFUL LINKS</h2>
          <div className="md:text-2xl">
            <p>News</p>
            <p>Projcts</p>
            <p>License</p>
            <p>Terms of Service</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl my-4 md:text-5xl">ENQUIRE</h2>
          <div className="md:text-2xl">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-b-[1px] p-2"
            />{" "}
            <br />
            <input
              type="email"
              placeholder="email"
              className="bg-transparent border-b-[1px] p-2"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-8 border-b-[1px]">
        <FaFacebook className="text-[2.5rem] mx-2" />
        <FaInstagram className="text-[2.5rem] mx-2" />
        <FaLinkedin className="text-[2.5rem] mx-2" />
        <FaYoutube className="text-[2.5rem] mx-2" />
      </div>
      <div className="p-3 text-xl text-center">
        <h3>Made by Vansh Sharma</h3>
      </div>
    </div>
  );
}

export default Footer;
