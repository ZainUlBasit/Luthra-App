import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { PartnerInfoCard } from "../../components/Cards/Partner/PartnerInfoCard";
import ProfileImage from "../../assets/images/profile.png";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";

const PartnerDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center items-center flex-col gap-y-2 py-10">
        <div className="font-righteous text-2xl">EXAMPLE NAME</div>
        <div className="font-inter text-[1.1rem] font-[400]">
          Partner Designate
        </div>
        <div className="flex font-inter text-[1rem] font-[600]">
          <div className="border-r-2 border-r-[#1F1F1F] px-2">
            Dispute Resolution
          </div>
          <div className="px-2">Restructuring & Insolvency</div>
        </div>
      </div>
      <div className="flex gap-x-3 items-center justify-around px-[80px] pb-10">
        {[
          { title: "Bar Enrolment", bullets: ["Bar Council of Delhi"] },
          {
            title: "Education",
            bullets: [
              "BLS. LL.B. – Government Law College, Mumbai",
              "LLM - Kurukshetra University",
            ],
          },
          {
            title: "Awards / Recognition",
            bullets: [
              "Lorem ipsum dolor sit amet consectetur. A nunc ridiculus enim viverra nulla sed sitscelerisque. In suspendisse.",
            ],
          },
        ].map((dt) => {
          return <PartnerInfoCard title={dt.title} bullets={dt.bullets} />;
        })}
      </div>
      <div className="flex items-center gap-x-4 px-[80px]">
        <div className="">
          <img
            src={ProfileImage}
            className="w-[250px] h-[250px] rounded-[40px]"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="font-bold font-righteous text-2xl pb-3">Contact</div>
          <div className="flex items-center gap-x-2">
            <BsFillTelephoneFill />
            <div className="font-inter font-[300] text-sm">+101 988****90</div>
          </div>
          <div className="flex items-center gap-x-2">
            <MdEmail />
            <div className="font-inter font-[300] text-sm">
              Examplename@gmail.com
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <MdLocationOn />
            <div className="font-inter font-[300] text-sm">
              Location Example ...etc
            </div>
          </div>
        </div>
      </div>
      <div className="px-[80px] flex flex-col gap-y-3 py-10">
        <div className="font-righteous text-2xl">Overview</div>
        <div className="font-inter text-[1rem]">
          Lorem ipsum dolor sit amet consectetur. Elementum egestas dolor et
          sollicitudin duis vel tempus at. Etiam enim auctor an amet ultrices
          sit amet amet lectus. Nisl sem justo nisl urna proin amet in.
          Adipiscing nunc nunc hendrerit platea odio ve in pulvinar vitae diam.
          Gravida ipsum est sed arcu bibendum. Purus vitae purus consectetur
          risus et arcu volconsectetur. am Vitae gravida tortor nullam lectus
          purus nec. Ullamcorper rhoncus natoque ornare in habitant. Massa vel
          at nunc et ut ami purus in. Aliquam cras diam duis nullam in mauris
          morbi at varius. Sit lobortis eros adipiscing ultrices. Viverra ac
          mattis in varius massa. Molestie enim sed arcu elit ullamcorper velit
          morbi ac. Sit at est dignissim facilisis quisque. Quis velit qui in
          amet nibh. Non amet pharetra in suspendisse sed suscipit. Nullam amet
          laoreet euismod imperdiet pellentesque. Morbi in maecenas proin cum
          diam placerat iaculis enim aliquet. Faucibus at ornare quis tellus.
        </div>
        <div className="font-inter text-[1rem]">
          Lorem ipsum dolor sit amet consectetur. Elementum egestas dolor et
          sollicitudin duis vel tempus at. Etiam enim auctor an amet ultrices
          sit amet amet lectus. Nisl sem justo nisl urna proin amet in.
          Adipiscing nunc nunc hendrerit platea odio ve in pulvinar vitae diam.
          Gravida ipsum est sed arcu bibendum. Purus vitae purus consectetur
          risus et arcu volconsectetur. am Vitae gravida tortor nullam lectus
          purus nec. Ullamcorper rhoncus natoque ornare in habitant. Massa vel
          at nunc et ut ami purus in. Aliquam cras diam duis nullam in mauris
          morbi at varius. Sit lobortis eros adipiscing ultrices. Viverra ac
          mattis in varius massa. Molestie enim sed arcu elit ullamcorper velit
          morbi ac. Sit at est dignissim facilisis quisque. Quis velit qui in
          amet nibh. Non amet pharetra in suspendisse sed suscipit. Nullam amet
          laoreet euismod imperdiet pellentesque. Morbi in maecenas proin cum
          diam placerat iaculis enim aliquet. Faucibus at ornare quis tellus.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartnerDetail;
