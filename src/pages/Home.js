import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Interiors from "../components/Interiors";
import Schedule from "../components/Schedule";
import Neighborhood from "../components/Neighborhood";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Picksgrid from "../components/Picksgrid";

function Home() {
  return (
    <div>
      <Hero />
      <Card />
      <Interiors />
      <Schedule />
      <Neighborhood />
      <Banner />
      <Picksgrid />
      <Footer />
    </div>
  );
}

export default Home;
