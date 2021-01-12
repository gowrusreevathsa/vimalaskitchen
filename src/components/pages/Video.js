import React from "react";
import ReactPlayer from "react-player";
// import "./Video.css";

function Video() {
  return (
    <div class="video-container">
      <ReactPlayer
        url="https://www.youtube.com/embed/JkSILGbavHs"
        playing={true}
        width="853"
        height="480"
      />
    </div>
  );
}

export default Video;
