import React from "react";
import "./styles.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Discovery from "./discovery";
import Player from "./player";

const Video = props => (
  <div id="app">
    <Header />
    <main id="watch">
      <Player videoId={props.match.params.id} />
      <Discovery />
    </main>
    <Footer />
  </div>
);

export default Video;
