import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Item = () => (
  <article className="item">
    <Link to="watch/teste" className="item-link">
      <header className="thumbnail" title="Vídeo">
        <img src="https://picsum.photos/320/180" alt="imagem" />
      </header>
      <div className="item-details">
        <h2 title="Vídeo">Lorem Ipsum</h2>
        <span>Há 2 minutos</span>
      </div>
    </Link>
  </article>
);

export default Item;
