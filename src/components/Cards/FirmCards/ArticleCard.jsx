import React from "react";
import FirmImg from "../../../assets/images/FirmImg.png";

const ArticleCard = () => {
  return (
    <div className="w-[350px] h-[490px] rounded-[40px] overflow-hidden bg-[#EDEDED] flex justify-between flex-col">
      <img src={FirmImg} alt="" className="object-contain" />
      <div className="flex flex-col gap-y-2 py-5">
        <div className="font-inter font-semibold text-sm text-center">
          “Lorem ipsum dolor sit amet consectetur. amet gravida sed. Quisque
          euismod et sapien. Nibh vestibulum lectus aliquam convallis
          pellentesque morbi.“Lorem amet gravida sed.
        </div>
        <div className="font-inter font-[400] text-sm text-center">
          “Lorem ipsum dolor sit amet consectetur. amet gravida sed. Quisque
          euismod et egestas sapien. Nibh vestibulum lectus aliquam risus tempor
          enim convallis pellentesque morbi mi.
        </div>
      </div>
      <div className="flex justify-between items-center py-4 px-5">
        <div className="font-righteous p-2 px-3 bg-[#1F1F1F] text-white rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-500">
          More
        </div>
        <div className="font-righteous p-2 px-3 bg-[#1F1F1F] text-white rounded-lg cursor-pointer hover:bg-gray-700 transition-all ease-in-out duration-500">
          Article Link
        </div>
        <div className="font-inter text-sm">Jun 2024</div>
      </div>
    </div>
  );
};

export default ArticleCard;
