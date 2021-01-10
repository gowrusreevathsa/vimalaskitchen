import React, { useState, useEffect } from "react";
import ImageSlide from "./ImageSlide";
import Arrow from "./Arrow";
import "./Carousel.css";

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imgUrls = [
    "./images/carousel/img-1.jpg",
    "./images/carousel/img-2.jpg",
    "./images/carousel/img-3.jpg",
    "./images/carousel/img-4.jpg",
    "./images/carousel/img-5.jpg",
  ];

  const previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const imageIndex = currentImageIndex;
    const shouldResetIndex = imageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : imageIndex + 1;
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="carousel-container">
      <Arrow direction="left" clickFunction={previousSlide} glyph="&#9664;" />

      <ImageSlide url={imgUrls[currentImageIndex]} />

      <Arrow direction="right" clickFunction={nextSlide} glyph="&#9654;" />
    </div>
  );
}

export default Carousel;
