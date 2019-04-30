import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const NotFound = () => (
  <main id="notfound">
    <h1>404</h1>
    <h2>Página não encontrada!</h2>
    <Link to="/" className="back">
      Voltar
    </Link>
  </main>
);

export default NotFound;
