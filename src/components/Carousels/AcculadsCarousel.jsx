import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { TargetMarketsData } from "./TargetMarketsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { CarouselWrapper } from "./CarouselWrapper";
import BlogCard from "../Cards/BlogCard";
import AccoladesCard from "../Cards/AccoladesCard";

const AcculadsCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <CarouselWrapper className="gap-y-10 flex flex-col justify-between items-center w-full h-full">
      <div className="w-[80%] pb-[60px]">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          autoplaySpeed={1000}
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          draggable={true}
          centerMode={windowWidth < 500 ? true : true}
          centerPadding={windowWidth < 400 ? "20%" : "2px"}
          arrows={false}
          // prevArrow={<PrevArrow />}
          // nextArrow={<NextArrow />}
          responsive={[
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                centerMode: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {TargetMarketsData.map((dt, i) => (
            <AccoladesCard key={i} />
          ))}
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default AcculadsCarousel;
