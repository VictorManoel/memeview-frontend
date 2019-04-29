import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => (
  <header id="header">
    <Link to="/" className="header-link" title="MemeView">
      <span className="logo" />
    </Link>
  </header>
);

export default Header;
