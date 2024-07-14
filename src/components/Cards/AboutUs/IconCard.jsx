import React from "react";

const IconCard = ({ title }) => (
  <div className="w-[350px] flex flex-col gap-y-2">
    <div className="flex items-center gap-x-3">
      <div className="bg-black text-white flex justify-center items-center rounded-[25px] min-w-[80px] min-h-[75px] font-righteous text-xl">
        ICON
      </div>
      <div className="font-righteous text-xl">{title}</div>
    </div>
    <div className="text-justify font-inter text-sm">
      Lorem ipsum dolor sit amet consectetur. Elementum egestas dolor et
      sollicitudin duis vel tempus at. Ame Etiam enim auctor an amet ultrices
      sit amet amet lec Nisl sem justo nisl urna proin amet in. Adipiscing nun
      nunc hendrerit platea odio ve in pulvinar vitae diam. Gravida ipsum est
      sed arcu bibendum. Purus vitae consectetur risus et arcu volconsectetur.
    </div>
  </div>
);

export default IconCard;
