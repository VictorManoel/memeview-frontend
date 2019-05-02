import React, { Component } from "react";
import Api from "../../../services/api";
import "./styles.css";

import Item from "./item";
import Loader from "./loader";
import Scroller from "react-infinite-scroller";

export default class List extends Component {
  state = {
    items: [],
    nextPageToken: 1,
    hasMore: true,
    hasError: false
  };

  loadItems = async () => {
    try {
      const { nextPageToken } = this.state;
      const res = await Api.get(`?index=${nextPageToken}`);

      if (res.status === 200 && !this.state.error) {
        const { data } = res;
        const { nextPageToken, hasMore } = data;
        const items = [...this.state.items, ...data.items];

        this.setState({ items, nextPageToken, hasMore });
      } else if (res.status === 400) {
        this.setState({ hasError: true, hasMore: false });
      }
    } catch (error) {
      this.setState({ hasError: true, hasMore: false });
    }
  };

  render() {
    const { items, hasError, hasMore } = this.state;

    return (
      <section className="list">
        <Scroller
          className="list-items"
          pageStart={1}
          loadMore={this.loadItems}
          hasMore={hasMore}
        >
          {items
            .filter(item => (item.snippet.thumbnails ? true : false))
            .map(item => (
              <Item key={item.id} snippet={item.snippet} />
            ))}
        </Scroller>

        {hasError ? (
          <div className="error-list">
            <span>Houve um error no servidor! :'(</span>
          </div>
        ) : (
          <Loader isLoading={hasMore} />
        )}
      </section>
    );
  }
}
