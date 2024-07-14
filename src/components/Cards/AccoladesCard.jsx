import React from "react";
import CompanyImage from "../../assets/images/companyImage.png";

const AccoladesCard = () => {
  return (
    <div className="w-[150px] h-[150px] overflow-hidden shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-full flex my-10">
      <img
        src={CompanyImage}
        className="w-[150px] h-[150px] object-cover rounded-full"
        alt="not found"
      />
    </div>
  );
};

export default AccoladesCard;
