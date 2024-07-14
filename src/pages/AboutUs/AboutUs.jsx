import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutUsBg from "../../assets/images/AboutUsBg.png";
import AboutUsProfileCard from "../../components/Cards/AboutUsProfileCard";
import IconCard from "../../components/Cards/AboutUs/IconCard";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <img src={AboutUsBg} alt="" className="object-fill" />
      <div className="flex w-full justify-center py-[100px] gap-x-8 gap-y-8 flex-wrap">
        <div
          className="w-[280px] h-[280px] font-inter  text-3xl font-bold text-white bg-[#1F1F1F] flex justify-center items-center rounded-full text-center flex-col gap-y-4 cursor-pointer"
          onClick={() => navigate("/about-us/partners")}
        >
          <div className="text-5xl">66</div>
          <div className="">Partners</div>
        </div>
        <div className="w-[280px] h-[280px] font-righteous  text-3xl font-bold text-white bg-[#1F1F1F] flex justify-center items-center rounded-full text-center flex-col gap-y-4">
          <div className="text-5xl">24</div>
          <div className="">Practice Areas</div>
        </div>
        <div className="w-[280px] h-[280px] font-righteous  text-3xl font-bold text-white bg-[#1F1F1F] flex justify-center items-center rounded-full text-center flex-col gap-y-4">
          <div className="text-5xl">450</div>
          <div className="">Members</div>
        </div>
      </div>
      <div className="px-[80px]">
        <AboutUsProfileCard />
      </div>
      <div className="flex flex-col gap-y-3 px-[80px] py-5">
        <div className="font-inter text-sm font-[500] text-justify">
          Lorem ipsum dolor sit amet consectetur. Elementum egestas dolor et
          sollicitudin duis vel tempus at. Etiam enim auctor an amet ultrices
          sit amet amet lectus. Nisl sem justo nisl urna proin amet in.
          Adipiscing nunc nunc hendrerit platea odio ve in pulvinar vitae diam.
          Gravida ipsum est sed arcu bibendum. Purus vitae purus consectetur
          risus et arcu volconsectetur. am Vitae gravida tortor nullam lectus
          purus nec. Ullamcorper rhoncus natoque ornare in habitant. Massa vel
          at nunc et ut ami purus in. Aliquam cras diam duis nullam in mauris
          morbi at varius. Sit lobortis eros adipiscing ultrices. Viverra ac
          mattis in varius massa. Molestie enim sed arcu elit ullamcorper velit
          morbi ac. Sit at est dignissim facilisis quisque. Quis velit qui in
          amet nibh. Non amet pharetra in suspendisse sed suscipit. Nullam amet
          laoreet euismod imperdiet pellentesque. Morbi in maecenas proin cum
          diam placerat iaculis enim aliquet. Faucibus at ornare quis tellus.
        </div>
        <div className="font-inter text-sm font-[500] text-justify">
          Lorem ipsum dolor sit amet consectetur. Elementum egestas dolor et
          sollicitudin duis vel tempus at. Etiam enim auctor an amet ultrices
          sit amet amet lectus. Nisl sem justo nisl urna proin amet in.
          Adipiscing nunc nunc hendrerit platea odio ve in pulvinar vitae diam.
          Gravida ipsum est sed arcu bibendum. Purus vitae purus consectetur
          risus et arcu volconsectetur. am Vitae gravida tortor nullam lectus
          purus nec. Ullamcorper rhoncus natoque ornare in habitant. Massa vel
          at nunc et ut ami purus in. Aliquam cras diam duis nullam in mauris
          morbi at varius. Sit lobortis eros adipiscing ultrices. Viverra ac
          mattis in varius massa. Molestie enim sed arcu elit ullamcorper velit
          morbi ac. Sit at est dignissim facilisis quisque. Quis velit qui in
          amet nibh. Non amet pharetra in suspendisse sed suscipit. Nullam amet
          laoreet euismod imperdiet pellentesque. Morbi in maecenas proin cum
          diam placerat iaculis enim aliquet. Faucibus at ornare quis tellus.
        </div>
        <div className="font-inter text-sm font-[500] text-justify">
          Lorem ipsum dolor sit amet consectetur. Elementum egestas dolor et
          sollicitudin duis vel tempus at. Etiam enim auctor an amet ultrices
          sit amet amet lectus. Nisl sem justo nisl urna proin amet in.
          Adipiscing nunc nunc hendrerit platea odio ve in pulvinar vitae diam.
          Gravida ipsum est sed arcu bibendum. Purus vitae purus consectetur
          risus et arcu volconsectetur. am Vitae gravida tortor nullam lectus
          purus nec. Ullamcorper rhoncus natoque ornare in habitant. Massa vel
          at nunc et ut ami purus in. Aliquam cras diam duis nullam in mauris
          morbi at varius. Sit lobortis eros adipiscing ultrices. Viverra ac
          mattis in varius massa. Molestie enim sed arcu elit ullamcorper velit
          morbi ac. Sit at est dignissim facilisis quisque. Quis velit qui in
          amet nibh. Non amet pharetra in suspendisse sed suscipit. Nullam amet
          laoreet euismod imperdiet pellentesque. Morbi in maecenas proin cum
          diam placerat iaculis enim aliquet. Faucibus at ornare quis tellus.
        </div>
      </div>
      <div className="flex gap-x-10 flex-wrap items-center justify-between gap-y-10 w-full py-10 px-[80px]">
        {[
          "WE THRIVE IN INTENDITY",
          "WE REVEAL IN DIVERSITY",
          "WE DELIVER BALANCE ADVICE",
          "WE ADAP AND ADOPT",
          "PROFECIENCY IN MYRAID SECTOR",
          "INTEGRITY MATTERS TO US ABOVE ALL",
        ].map((dt) => (
          <IconCard title={dt} />
        ))}
      </div>

      <div className="px-[80px] flex flex-col gap-y-1 py-8">
        <div className="flex items-center gap-x-2 font-righteous text-xl">
          <div className="h-3 w-3 bg-black rounded-full"></div>Aviation
        </div>
        <div className="flex items-center gap-x-2 font-righteous text-xl">
          <div className="h-3 w-3 bg-black rounded-full"></div>E-commerce
        </div>
        <div className="flex items-center gap-x-2 font-righteous text-xl">
          <div className="h-3 w-3 bg-black rounded-full"></div>Construction &
          Infrastructure
        </div>
        <div className="flex items-center gap-x-2 font-righteous text-xl">
          <div className="h-3 w-3 bg-black rounded-full"></div>Energy
        </div>
        <div className="flex items-center gap-x-2 font-righteous text-xl">
          <div className="h-3 w-3 bg-black rounded-full"></div>Fintech
        </div>
        <div className="flex items-center gap-x-2 font-righteous text-xl">
          <div className="h-3 w-3 bg-black rounded-full"></div>Insurance
        </div>
        <div className="flex items-center gap-x-2 font-righteous text-xl">
          <div className="h-3 w-3 bg-black rounded-full"></div>Manufacturing
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
