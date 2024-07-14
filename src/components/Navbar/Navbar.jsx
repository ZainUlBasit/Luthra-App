import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-[100%] h-[10vh] gap-x-10 px-6 py-6 bg-[#1F1F1F] text-white">
      <div className="h-full flex items-center font-bold text-3xl font-righteous">
        LOGO
      </div>
      <div className="flex gap-x-8 ml-[100px] h-full items-center">
        <div
          className="font-righteous text-gray-300 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div
          className="font-righteous text-gray-300 cursor-pointer"
          onClick={() => navigate("/about-us")}
        >
          About Us
        </div>
        <div
          className="font-righteous text-gray-300 cursor-pointer"
          onClick={() => navigate("/expertise/1")}
        >
          Expertise
        </div>
        <div
          className="font-righteous text-gray-300 cursor-pointer"
          onClick={() => navigate("/in-the-spotlights")}
        >
          In the Spotlight
        </div>
        <div
          className="font-righteous text-gray-300 cursor-pointer"
          onClick={() => navigate("/thought-capital")}
        >
          Thought Capital
        </div>
        <div className="font-righteous text-gray-300 cursor-pointer">
          Career
        </div>
        <div className="font-righteous text-gray-300 cursor-pointer">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Navbar;
