import React, { Component } from "react";
import axios from "axios";

const url = "http://083074f9.ngrok.io/";

class GifFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`${url}api/post/all`).then(res => {
      console.log(res.data);
      this.setState({ posts: res.data });
    });
  }

  render() {
    return <div>Feed</div>;
  }
}

export default GifFeed;
