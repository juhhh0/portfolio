import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
//@ts-ignore
import Slider from "react-slick";

function Carousel({ data }: { data: any }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container py-6">
      <Slider {...settings}>
        {data.map((screen: string, i: number) => (
          <img
            key={i}
            src={"/images/" + screen}
            alt="project screenshot"
            className="w-full flex-1 min-w-[150px] aspect-video pr-2"
          />
        ))}
        
      </Slider>
    </div>
  );
}

export default Carousel;
