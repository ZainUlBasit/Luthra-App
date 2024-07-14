import React from "react";

const SearchInput = ({ Value, SetValue, Placeholer, Icon }) => {
  return (
    <div className="w-[300px] flex items-center gap-x-2 border-[1px] border-[#1F1F1F] px-3 rounded-full overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {Icon && <Icon className="text-2xl" />}
      <input
        value={Value}
        onChange={(e) => SetValue(e.target.value)}
        placeholder={Placeholer}
        type="text"
        className="w-full h-full  py-3 outline-none"
      />
    </div>
  );
};

export default SearchInput;
