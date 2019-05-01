import React from "react";
import "./styles.css";

const Loader = props => {
  const isLoading = props.isLoading ? "loading" : "finish";

  return (
    <div className="loader">
      <span className={`emoji ${isLoading}`} />
    </div>
  );
};

export default Loader;
