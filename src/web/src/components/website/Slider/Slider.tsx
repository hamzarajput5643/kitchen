import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Slider.scss";

const Slider: React.FC = () => {
  const items = [
    <div className="slider-item " key="1">
      <img
        src="/src/assets/images/slideshow-1.jpg"
        alt="Slide"
        className="slide-bg"
      />
      <div className="caption caption-1">Experience the food</div>
      <div className="caption caption-2">
        Wish you have good food at our restaurant
      </div>
    </div>,
    <div className="slider-item " key="2">
      <img
        src="/src/assets/images/slideshow-1.jpg"
        alt="Slide"
        className="slide-bg"
      />
      <div className="caption caption-1">Experience the food</div>
      <div className="caption caption-2">
        Wish you have good food at our restaurant
      </div>
    </div>,
    <div className="slider-item " key="3">
      <img
        src="/src/assets/images/slideshow-1.jpg"
        alt="Slide"
        className="slide-bg"
      />
      <div className="caption caption-1">Experience the food</div>
      <div className="caption caption-2">
        Wish you have good food at our restaurant
      </div>
    </div>,
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls={true}
        disableButtonsControls={true}
        autoPlay={true}
        autoPlayInterval={3000}
        infinite={true}
      />
    </>
  );
};

export default Slider;