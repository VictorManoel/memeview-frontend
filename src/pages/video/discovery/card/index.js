import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  const { data } = props;

  return (
    <article className="card" title={data.title}>
      <Link to={data.resourceId.videoId}>
        <img src={data.thumbnails.medium.url} alt={data.title} />
      </Link>
    </article>
  );
};

export default Card;
