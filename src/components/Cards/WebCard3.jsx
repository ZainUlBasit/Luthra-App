import React from "react";
import ProfileCard from "./ProfileCard";

const WebCard3 = () => {
  return (
    <div className="w-[550px] rounded-[3rem] overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10">
      <div className="flex flex-col bg-black text-white">
        <div className="w-full px-8 py-4 text-2xl font-bold">LOGO</div>
        <div className="flex flex-col justify-center items-center gap-y-3 py-8">
          <div className="font-righteous font-bold text-xl">
            DEAL ANNOUNCEMENT
          </div>
          <div className="font-semibold font-righteous">
            LOREM IPSUM DOLOR SIT AMET CONSECTURE
          </div>
          <div className="px-8 text-[10px] pb-8">
            Lorem ipsum dolor sit amet consectetur. Arcu maecenas tristique amet
            gravida sed. Quisque euismod et egestas turpis odio mollis eget
            sapien. Nibh vestibulum lectus aliquam risus dui risus et orci.
            Velit tempor enim convallis pellentesque morbi mi sem enim.
            Hendrerit ornare egestas ornare in aliquam faucibus ut sit. Odio
            egestas varius nunc aliquam pretium lacinia eget aliquam sed. Sit
            egestas amet nulla donec purus varius quis magna.
          </div>
        </div>
      </div>
      <div className="w-full pt-4 pb-8 bg-white">
        <div className="py-4 flex justify-center items-center font-[400] font-righteous">
          TRANSACTION TEAM
        </div>
        <div className="flex gap-x-8 items-center justify-center w-full">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
      <div className="w-full pt-4 pb-8 bg-white">
        <div className="py-4 flex justify-center items-center font-[400] font-righteous">
          COMPITITION TEAM
        </div>
        <div className="flex gap-x-8 items-center justify-center w-full px-8">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
      <div className="w-full pt-4 pb-8 bg-white">
        <div className="py-4 flex justify-center items-center font-[400] font-righteous">
          COMPITITION TEAM
        </div>
        <div className="flex gap-x-8 items-center justify-center w-full flex-wrap gap-y-8 px-8">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default WebCard3;
