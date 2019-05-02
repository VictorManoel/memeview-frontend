import React from "react";
import "./styles.css";

// Components
import Header from "../../components/header";
import List from "./list";
import Footer from "../../components/footer";

const Home = () => {
  document.title = "MemeView";

  return (
    <div id="app">
      <Header />
      <main id="home">
        <h1>Memeview Home</h1>
        <List />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
