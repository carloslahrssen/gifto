import React, { Component } from "react";
import PostForm from "../Containers/PostForm";
import GifFeed from "../Containers/GifFeed";

class Container extends Component {
  render() {
    return (
      <div>
        <PostForm />
        <GifFeed />
      </div>
    );
  }
}

export default Container;
