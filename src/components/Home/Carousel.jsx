import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";

function Carousel(props) {
  var settings = {
    infinite: false,
    accessibility: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  
  return (
    <div className="carousel">
      <p className="carousel_title">{props.title}</p>
      <Slider {...settings}>
        <div>
          <CarouselItem/>
        </div>
        <div>
          <CarouselItem/>
        </div>
        <div>
          <CarouselItem/>
        </div>
        <div>
          <CarouselItem/>
        </div>
        <div>
          <CarouselItem/>
        </div>
        <div>
          <CarouselItem/>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;