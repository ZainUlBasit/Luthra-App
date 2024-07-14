import React from "react";
import Avatar from "../../assets/images/Avatar.png";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={Avatar} className="w-[60px] h-[60px] rounded-full" alt="" />
      <div className="font-bold font-righteous pt-[1px] pb-[2px]">Name</div>
      <div className="font-[400] text-sm font-righteous">Role</div>
    </div>
  );
};

export default ProfileCard;
