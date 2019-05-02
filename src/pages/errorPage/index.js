import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const errorPage = () => {
  document.title = "MemeView | Error";

  return (
    <main id="errorpage">
      <span className="error-emoji" />
      <h2>Houve um erro no servidor!</h2>
      <Link to="/" className="back">
        Voltar
      </Link>
    </main>
  );
};

export default errorPage;
