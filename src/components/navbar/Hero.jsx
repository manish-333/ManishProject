import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  var settings = {
    dots: true,             // Dots are enabled at the bottom
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,          // Remove the navigation arrows
    autoplay: true,         // Enables automatic sliding
    autoplaySpeed: 2000,    // Slide will change every 3 seconds (3000 ms)
  };

  const slider = [
    { id: 1, img: '/images/b2.jpg' },
    { id: 2, img: '/images/b3.jpg' },
    // { id: 4, img: '/images/b6.jpg' }
    // { id: 3, img: '/images/b7.jpg' }
    

  

  ];

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {slider.map((slide, index) => (
          <div key={index}>
            <img src={slide.img} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
