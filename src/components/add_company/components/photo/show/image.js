import React, { Component } from "react";
export default class image extends Component {
  render() {
    const { src, ...props } = this.props;
    console.log(src, "hhhhhhhhhhhss");
    return <img {...props} src={src} />;
  }
}
