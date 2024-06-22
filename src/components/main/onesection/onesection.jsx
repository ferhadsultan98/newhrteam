import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../main/onesection/onesection.css";
import Carousel1 from "../../../assets/karusel1.jpg"
import Carousel2 from "../../../assets/karusel1.jpg"
import Carousel3 from "../../../assets/karusel1.jpg"


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className="CarouselPart">
        <img src={Carousel1} alt="" />
      </div>
      <div className="CarouselPart">
      <img src={Carousel1} alt="" />
      </div>
      <div className="CarouselPart">
      <img src={Carousel1} alt="" />
      </div>
    </Slider>
  );
}