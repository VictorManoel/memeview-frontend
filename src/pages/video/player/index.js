import React from "react";
import "./styles.css";

const Player = () => (
  <section id="player">
    <div className="video">
      <iframe
        src="https://www.youtube-nocookie.com/embed/ukKQw578Lm8"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      />
    </div>
    <div className="video-details">
      <h1>Vídeo Lorem ipsum</h1>
      <span>Há 22 minutos &#xb7; 1000000000 Views</span>
    </div>
  </section>
);

export default Player;
