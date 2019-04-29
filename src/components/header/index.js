import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => (
  <header id="header">
    <Link to="/" className="header-link">
      <span className="logo" title="MemeView" />
    </Link>
  </header>
);

export default Header;
