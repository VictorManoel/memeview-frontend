import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Api from "../../../services/api";
import "./styles.css";

import Card from "./card";

class Discovery extends Component {
  state = {
    isLoading: true,
    hasError: false,
    items: []
  };

  async componentDidMount() {
    try {
      const res = await Api.get("more");
      const { data } = res;

      this.setState({ isLoading: false, items: data });
    } catch (error) {
      console.log(error);
      this.setState({ hasError: true });
    }
  }

  render() {
    const { isLoading, hasError, items } = this.state;

    if (hasError) return <Redirect to="/error" />;

    return (
      <section id="discovery">
        {isLoading && (
          <div className="load-cards">
            <span />
          </div>
        )}

        {items
          .filter(item => (item.thumbnails ? true : false))
          .map(item => {
            const { videoId } = item.resourceId;
            return <Card key={videoId} data={item} />;
          })}
      </section>
    );
  }
}

export default Discovery;
