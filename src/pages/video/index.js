import React, { Component } from "react";
import "./styles.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Discovery from "./discovery";
import Player from "./player";

class Video extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <main id="watch">
          <Player />
          <Discovery />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Video;
