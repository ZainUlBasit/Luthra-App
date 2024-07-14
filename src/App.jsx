import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeB from "./assets/images/HomeB.png";
import WebCard from "./components/Cards/WebCard";
import BgImage from "./assets/images/bg.png";
import BlogCarousel from "./components/Carousels/BlogCarousel";
import { Carousel } from "nuka-carousel";
import AcculadsCarousel from "./components/Carousels/AcculadsCarousel";
import UpdateCard from "./components/Cards/UpdateCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <img src={HomeB} alt="nothing" className="w-full object-cover" />
      <div className="">
        <div className="w-full text-center font-righteous text-2xl py-8 pt-10">
          KEY RECOGNITION
        </div>
        <div className="flex w-full justify-center py-4 gap-x-6 gap-y-6 flex-wrap">
          <div className="w-[280px] h-[250px] font-righteous  text-3xl font-bold text-white bg-black flex justify-center items-center rounded-[60px] text-center">
            Chambers And Partners Global And Asia Pacific 2024
          </div>
          <div className="w-[280px] h-[250px] font-righteous  text-3xl font-bold text-white bg-black flex justify-center items-center rounded-[60px] text-center">
            Legal 500 Asial- Pacific and Green Guide 2024
          </div>
          <div className="w-[280px] h-[250px] font-righteous  text-3xl font-bold text-white bg-black flex justify-center items-center rounded-[60px] text-center">
            BloombergNEF Clean Energy League Tables
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start px-[120px] relative py-[80px] bg-[#1F1F1F14]">
        <div className="font-[400] font-righteous text-3xl text-black text-center w-full pb-[60px]">
          DEAL CORNER
        </div>
        <WebCard />
        <img
          src={BgImage}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px] ml-[150px] -z-1"
          alt="Background"
        />
        <div className="flex w-full justify-center items-center py-[60px]">
          <div className="px-3 py-3 bg-black text-white font-righteous hover:bg-gray-800 font-semibold text-xl rounded-lg transition-all ease-in-out duration-500 cursor-pointer">
            Learn More
          </div>
        </div>
      </div>
      <div className="">
        <div className="font-[400] font-righteous text-3xl text-black text-center w-full py-[20px] pt-[100px]">
          TESTIMONIALS
        </div>
        {/* slider */}
        <div className=" pb-8 flex flex-col">
          <BlogCarousel />
          <div className="flex w-full justify-center items-center py-[40px]">
            <div className="px-3 py-3 bg-black text-white font-righteous hover:bg-gray-800 font-semibold text-xl rounded-lg transition-all ease-in-out duration-500 cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1f1f1f14]">
        <div className="font-[400] font-righteous text-3xl text-black text-center w-full pt-[60px] pb-[40px]">
          ACCOLADES
        </div>
        <AcculadsCarousel />
      </div>
      <div className="py-8 pb-10">
        <div className="font-[400] font-righteous text-3xl text-black text-center w-full pt-[60px] pb-[40px]">
          RECENT UPDATES
        </div>
        <div className="flex justify-center items-center gap-x-10">
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
