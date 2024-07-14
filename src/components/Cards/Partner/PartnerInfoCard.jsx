import React from "react";

export const PartnerInfoCard = ({ title, bullets }) => {
  console.log(bullets);
  return (
    <div className="bg-[#1F1F1F] w-[300px] h-[180px] text-white gap-y-4 py-6 px-6 rounded-[30px]">
      <div className="font-righteous text-xl mb-4">{title}</div>
      {bullets &&
        bullets.map((dt) => {
          return (
            <div className="flex items-start gap-x-2 font-inter font-[500] text-sm text-white my-2">
              <div className="min-h-3 min-w-3 bg-white rounded-full mt-1"></div>
              {dt}
            </div>
          );
        })}
    </div>
  );
};
