import React from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import "moment/locale/pt-br";
import "./styles.css";

const Item = props => {
  // Item snippet
  const { snippet } = props;
  const { resourceId, thumbnails, publishedAt } = snippet;
  Moment.locale("pt-BR");

  // Render Item
  return (
    <article className="item">
      <Link to={`watch/${resourceId.videoId}`} className="item-link">
        <header className="thumbnail" title={snippet.title}>
          <img src={thumbnails.medium.url} alt={snippet.title} />
        </header>
        <div className="item-details">
          <h2 title={snippet.title}>{snippet.title}</h2>
          <span>Na lista {Moment(publishedAt).fromNow()}</span>
        </div>
      </Link>
    </article>
  );
};

export default Item;
