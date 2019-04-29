import React, { Component } from "react";
import "./styles.css";

import Item from "./item";
import Loader from "./loader";

export default class List extends Component {
  render() {
    return (
      <section className="list">
        <div className="list-items">
          <Item />
          <Item />
          <Item />
        </div>
        <Loader />
      </section>
    );
  }
}
