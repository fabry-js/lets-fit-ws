import React from "react";
import MainInitialAbout from "../components/main-content-initial-about/MainInitialAbout";
import MainSection from "../components/main-section/MainSection";
import TopNavBar from "../components/nav-bar/TopNavBar";

const Home = () => {
  return (
    <div>
      <TopNavBar />
      <MainSection />
      <MainInitialAbout />
    </div>
  );
};

export default Home;
