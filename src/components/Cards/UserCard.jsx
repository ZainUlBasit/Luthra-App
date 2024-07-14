import React from "react";
import ProfImage from "../../assets/images/User.jpg";
import { useNavigate } from "react-router-dom";

const UserCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[300px] h-[494px] flex justify-center items-center flex-col text-white bg-[#1F1F1F] p-8 rounded-[50px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
      onClick={() => navigate("/about-us/partners-detail")}
    >
      <div className="w-[150px] h-[150px] rounded-full object-contain overflow-hidden border-4 border-white">
        <img src={ProfImage} alt="" className="" />
      </div>
      <div className="flex justify-center items-center flex-col py-5">
        <div className="font-righteous font-bold text-2xl">Name</div>
        <div className="font-inter font-[400] text-xl">Place India Etc</div>
      </div>
      <div className="font-inter text-sm text-center">
        Lorem ipsum dolor sit amet consectetur. Elementum egestas dolor et
        sollicitudin duis vel tempus at. Etiam enim auctor an amet ultrices sit
        amet amet lectus. Elementum egestas dolor et sollicitudin duis vel
        tempus at. Etiam enim auctor an amet ultrices sit amet amet lectus
      </div>
    </div>
  );
};

export default UserCard;
