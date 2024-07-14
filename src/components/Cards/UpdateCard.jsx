import React from "react";

const UpdateCard = () => {
  return (
    <div className="flex flex-col items-end gap-y-2">
      <div className="rounded-[30px] w-[350px] flex flex-col overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-col w-full bg-black text-white font-righteous gap-y-7 py-6 pb-6">
          <div className="text-xl font-semibold px-6">LOGO</div>
          <div className="flex w-full flex-col items-center justify-center gap-y-4">
            <div className="text-xl">Luthra & Top Law Firm</div>
            <div className="px-8 text-center font-righteous font-normal text-sm">
              Lorem ipsum dolor sit amet consectetur. amet gravida sed. Quisque
              euismod et egestas sapien. Nibh vestibulum lectus aliquam risus
              tempor enim convallis pellentesque morbi mi.
            </div>
          </div>
        </div>
        <div className="bg-[#EDEDED] flex flex-col justify-center items-center px-8">
          <div className="font-righteous font-bold text-xl gap-y-2 py-4">
            Luthra & Top Lorem Ipsum
          </div>
          <div className="font-righteous font-[300] text-sm mb-3">
            “Lorem ipsum dolor sit amet consectetur. amet gravida sed. Quisque
            euismod et egestas sapien. Nibh vestibulum lectus aliquam risus
            convallis pellentesque morbi mi.“Lorem ipsum amet gravida sed.
            Quisque euismod et egestas sapien. Nibh vestibulum lectus aliquam
            risus tempor enim convallis pellentesque morbi mi.
          </div>
          <div className="font-righteous font-[300] text-sm">
            “Lorem ipsum dolor sit amet consectetur. amet gravida sed. Quisque
            euismod et egestas sapien. Nibh vestibulum lectus aliquam risus
            tempor enim convallis pellentesque morbi mi.
          </div>
          <div className="w-full pb-5 pt-3">
            <div className="p-3 bg-black font-righteous font-semibold text-white w-fit rounded-lg cursor-pointer hover:bg-gray-800 transition-all ease-in-out duration-500">
              Read More
            </div>
          </div>
        </div>
      </div>
      <div className="font-righteous text-[1rem] font-thin hover:text-gray-700 transition-all ease-in-out duration-500 cursor-pointer">
        Recent Event
      </div>
    </div>
  );
};

export default UpdateCard;
