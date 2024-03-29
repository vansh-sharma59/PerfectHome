import { useLayoutEffect } from "react";
import Note from "../components/Note";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Picksgrid from "../components/Picksgrid";
import Schedule from "../components/Schedule";
import Team from "../components/Team";

function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Note />
      <Team />
      <Banner />
      <Picksgrid />
      <Schedule />
      <Footer />
    </div>
  );
}

export default About;
