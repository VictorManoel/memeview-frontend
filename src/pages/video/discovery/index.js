import React, { Component } from "react";
import Api from "../../../services/api";
import "./styles.css";

import Card from "./card";

class Discovery extends Component {
  state = {
    isLoading: true,
    items: []
  };

  async componentDidMount() {
    try {
      const res = await Api.get("more");
      const { data } = res;

      this.setState({ isLoading: false, items: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { isLoading, items } = this.state;

    return (
      <section id="discovery">
        {isLoading && (
          <div className="load-cards">
            <span />
          </div>
        )}

        {items.map(item => {
          const { videoId } = item.resourceId;
          return <Card key={videoId} data={item} />;
        })}
      </section>
    );
  }
}

export default Discovery;
