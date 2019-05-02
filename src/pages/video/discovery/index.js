import React, { Component } from "react";
import Api from "../../../services/api";
import "./styles.css";

import Card from "./card";

class Discovery extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    try {
      const res = await Api.get("more");

      const { data } = res;

      console.log(data);
      this.setState({ items: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { items } = this.state;

    return (
      <section id="discovery">
        {items.map(item => {
          const { videoId } = item.resourceId;
          return <Card key={videoId} data={item} />;
        })}
      </section>
    );
  }
}

export default Discovery;
