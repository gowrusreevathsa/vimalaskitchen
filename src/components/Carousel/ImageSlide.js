import React from "react";
import "./Carousel.css";

function ImageSlide({ url }) {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div className="image-slide" style={styles}></div>;
}

export default ImageSlide;
