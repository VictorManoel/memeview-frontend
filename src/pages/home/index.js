import React, { Component } from "react";
import "./styles.css";

import Header from "../../components/header";

class Home extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <main id="home">
          <h1>Memeview Home</h1>
          Teste
        </main>
      </div>
    );
  }
}

export default Home;
