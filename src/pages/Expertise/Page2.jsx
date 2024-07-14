import React from "react";
import UserCard from "../../components/Cards/UserCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Page2 = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center pt-10">
        <div className="py-8 font-righteous text-xl text-center w-[400px] px-[80px]">
          AVIATION
        </div>
      </div>
      <div className="font-inter font-[300] text-[1rem] mb-2 px-[80px]">
        Lorem ipsum dolor sit amet consectetur. Elementum egestas dolor et
        sollicitudin duis vel tempus at. Etiam enim auctor an amet ultrices sit
        amet amet lectus. Nisl sem justo nisl urna proin amet in. Adipiscing
        nunc nunc hendrerit platea odio ve in
      </div>
      <div className="font-inter font-[300] text-[1rem] mb-2 px-[80px]">
        Gravida ipsum est sed arcu bibendum. Purus vitae purus consectetur risus
        et arcu volconsectetur. am etiam amet ve in Vitae gravida tortor nullam
        lectus purus nec. Ullamcorper rhoncus natoque ornare in habitant. Massa
        vel at nunc et ut ami purus in.inti corporation complains.
      </div>
      <div className="font-inter font-[300] text-[1rem] mb-2 px-[80px]">
        Lorem ipsum dolor sit amet consectetur. Elementum egestas dolor et
        sollicitudin duis vel tempus at. Etiam enim auctor an amet ultrices sit
        amet amet lectus. Nisl sem justo nisl urna proin amet in. Adipiscing
        nunc nunc hendrerit platea odio ve in pulvinar vitae diam. Gravida ipsum
        est sed arcu bibendum. Purus vitae purus consectetur risus et arcu
        volconsectetur. am Vitae gravida tortor nullam lectus purus nec.
        Ullamcorper rhoncus natoque ornare in habitant. Massa vel at nunc et ut
        ami purus in. Aliquam cras diam duis nullam in mauris morbi at varius.
        Sit lobortis eros adipiscing ultrices. Viverra ac mattis in varius
        massa. Molestie enim sed arcu elit ullamcorper velit morbi ac. Sit at
        est dignissim facilisis quisque. Quis velit qui in amet nibh. Non amet
        pharetra in suspendisse sed suscipit. Nullam amet laoreet euismod
        imperdiet pellentesque. Morbi in maecenas proin cum diam placerat
        iaculis enim aliquet. Faucibus at ornare quis tellus.
      </div>
      <div className=" px-[80px]">
        <div className="font-righteous text-2xl py-4">Our Partners</div>
        <div className="flex flex-wrap justify-start items-start gap-y-5 gap-x-5 pb-10">
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
      </div>
      <Footer />
    </div>
  );
};

export default Page2;
