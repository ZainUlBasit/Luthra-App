import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import WebCard from "../../components/Cards/WebCard";
import Footer from "../../components/Footer/Footer";

const Spotlights = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center pt-10">
        <div className="py-8 font-righteous text-xl text-center w-[400px] px-[80px]">
          DEAL CORNER
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-10 px-[80px] gap-y-10 mb-10">
        <WebCard />
        <WebCard />
        <WebCard />
        <WebCard />
      </div>
      <Footer />
    </div>
  );
};

export default Spotlights;
