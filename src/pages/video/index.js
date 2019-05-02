import React from "react";
import "./styles.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Discovery from "./discovery";
import Player from "./player";

const Video = props => {
  const { id } = props.match.params;

  return (
    <div id="app">
      <Header />
      <main id="watch">
        <Player videoId={id} />
        <Discovery />
      </main>
      <Footer />
    </div>
  );
};

export default Video;
