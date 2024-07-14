import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchInput from "../../components/Inputs/SearchInput";
import { FiSearch } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import UserCard from "../../components/Cards/UserCard";
import Footer from "../../components/Footer/Footer";

const Partners = () => {
  const [SearchPartner, setSearchPartner] = useState("");
  const [SearchLocation, setSearchLocation] = useState("");
  const [SearchAreas, setSearchAreas] = useState("");
  return (
    <div>
      <Navbar />
      <div className="font-bold font-righteous text-3xl w-full text-center py-10">
        PARTNERS
      </div>
      <div className="flex justify-center gap-x-4 pb-10 px-[80px]">
        <SearchInput
          Value={SearchPartner}
          SetValue={setSearchPartner}
          Placeholer={"Search Partner"}
          Icon={FiSearch}
        />
        <SearchInput
          Value={SearchLocation}
          SetValue={setSearchLocation}
          Placeholer={"Search Location"}
          Icon={SlLocationPin}
        />
        <SearchInput
          Value={SearchAreas}
          SetValue={setSearchAreas}
          Placeholer={"Search Practice Areas"}
        />
      </div>
      <div className="flex flex-wrap justify-start items-start px-[80px] gap-y-5 gap-x-5 pb-10">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <Footer />
    </div>
  );
};

export default Partners;
