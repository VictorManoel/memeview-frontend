import React from "react";
import { Link } from "react-router-dom";

const Card = () => (
  <article className="card" title="Card">
    <Link to="/watch/card">
      <img src="https://picsum.photos/320/180" alt="Card" />
    </Link>
  </article>
);

export default Card;
