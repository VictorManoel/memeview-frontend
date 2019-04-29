import React, { Component } from "react";
import "./styles.css";

import Header from "../../components/header";

class Home extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
