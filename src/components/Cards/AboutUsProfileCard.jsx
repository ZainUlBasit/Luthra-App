import React from "react";
import ProfileImage from "../../assets/images/profile.png";

const AboutUsProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-fit border-b-2 border-b-[#1F1F1F]">
      <div className="font-[400] text-2xl font-righteous px-4 py-4">
        FOUNDED IN 1982 BY
      </div>
      <img
        src={ProfileImage}
        alt=""
        className="w-[300px] h-[300px] rounded-[70px] pb-5"
      />
      <div className="font-[400] text-xl font-righteous pl-2">
        Rajiv Name Luthra
      </div>
      <div className="text-[#1F1F1F] text-sm px-3">Aug 1958 - Jun 2022</div>
    </div>
  );
};

export default AboutUsProfileCard;
