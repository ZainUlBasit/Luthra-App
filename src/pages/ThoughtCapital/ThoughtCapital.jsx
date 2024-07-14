import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FirmCard from "../../components/Cards/FirmCards/FirmCard";
import Footer from "../../components/Footer/Footer";

const ThoughtCapital = () => {
  return (
    <div>
      <Navbar />
      <div className="font-bold font-righteous text-3xl w-full text-center py-10">
        FIRM UPDATES
      </div>
      <div className="flex justify-between items-center  flex-wrap gap-x-10 gap-y-10 px-[80px] mb-10">
        <FirmCard />
        <FirmCard />
        <FirmCard />
        <FirmCard />
      </div>
      <Footer />
    </div>
  );
};

export default ThoughtCapital;
