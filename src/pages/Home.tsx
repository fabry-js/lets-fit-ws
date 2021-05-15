import axios from "axios";
import React, { useEffect } from "react";
import MainInitialAbout from "../components/main-content-initial-about/MainInitialAbout";
import MainSection from "../components/main-section/MainSection";
import TopNavBar from "../components/nav-bar/TopNavBar";

const Home = () => {
  useEffect(() => {
    axios.post("https://stripe-letsfitja.herokuapp.com/track")
  })
  return (
    <div>
      <TopNavBar />
      <MainSection />
      <MainInitialAbout />
    </div>
  );
};

export default Home;
