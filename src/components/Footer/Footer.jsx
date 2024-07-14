import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around py-8 px-8 bg-[#1F1F1F] text-white">
      <div className="font-righteous gap-y-2">
        <div className="font-bold text-xl mb-3">LOGO</div>
        <div className="text-sm w-[300px]">
          “Lorem ipsum dolor sit amet consectetur. amet gravida sed. Quisque
          euismod et an sapien. Nibh vestibulum lectus aliquam tempor enim
          convallis pellentesque hasn ornare egestas ornare in aliquam amet in
          nunc aliquam pretium lacinia eget aliqua donec purus varius quis
          magna.
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-sm font-righteous pb-2">COMPANY</div>
        <div className="text-sm font-righteous">Home</div>
        <div className="text-sm font-righteous">About Us</div>
        <div className="text-sm font-righteous">Expertise</div>
        <div className="text-sm font-righteous">In the Spotlight</div>
        <div className="text-sm font-righteous">Thought Capital</div>
        <div className="text-sm font-righteous">Career</div>
        <div className="text-sm font-righteous">Contact Us</div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="font-bold font-righteous">JOIN US ON</div>
        <div className="flex gap-x-3">
          <div className="text-sm font-righteous">Facebook</div>
          <div className="text-sm font-righteous">Insta</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
