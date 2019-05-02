import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Moment from "moment";
import Api from "../../../services/api";
import "./styles.css";

export default class Player extends Component {
  state = {
    videoId: null,
    redirect: false,
    data: []
  };

  loadVideo = async () => {
    try {
      const id = this.props.videoId;
      const res = await Api.get(`/watch/${id}`);

      const { data } = res;
      const { videoId } = data.resourceId;

      if (res.status === 200) {
        this.setState({ videoId, data });
        document.title = "MemeView | " + data.title;
      }
    } catch (error) {
      if (error.response.status === 404) {
        this.setState({ redirect: true });
      } else {
        console.log(error);
      }
    }
  };

  componentDidMount() {
    this.loadVideo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.videoId !== this.props.videoId) {
      this.setState({ data: { title: "..." } });
      this.loadVideo();
    }
  }

  render() {
    const { redirect, videoId, data } = this.state;

    if (redirect) return <Redirect to="/404" />;

    return (
      <section id="player">
        <div className="video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video"
          />
        </div>
        <div className="video-details">
          <h1>{data.title}</h1>
          <span>Na lista {Moment(data.publishedAt).fromNow()}</span>
        </div>
      </section>
    );
  }
}
