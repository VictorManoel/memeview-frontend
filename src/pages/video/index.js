import React, { Component } from "react";
import "./styles.css";

import Header from "../../components/header";

class Video extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <main id="video">
          <h1>Vídeo</h1>
        </main>
      </div>
    );
  }
}

export default Video;
