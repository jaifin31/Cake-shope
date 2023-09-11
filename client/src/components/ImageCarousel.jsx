// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000, // Adjust the speed as needed
    autoplaySpeed: 2000, // Adjust the delay between slides as needed
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="/images/img1.jpg" alt="Image1" />
        </div>
        <div>
          <img src="/images/img2.jpg" alt="Image2" />
        </div>
        <div>
          <img src="/images/img3.jpg" alt="Image3" />
        </div>
        <div>
          <img src="/images/img4.jpg" alt="Image4" />
        </div>
        <div>
          <img src="/images/img12.jpg" alt="Image5" />
        </div>
        <div>
          <img src="/images/img16.jpg" alt="Image6" />
        </div>
        <div>
          <img src="/images/img7.jpg" alt="Image7" />
        </div>
        <div>
          <img src="/images/img8.jpg" alt="Image8" />
        </div>
        <div>
          <img src="/images/img10.jpg" alt="Image9" />
        </div>
        <div>
          <img src="/images/img15.jpg" alt="Image10" />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
