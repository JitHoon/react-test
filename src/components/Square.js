import React, { Component } from "react";
import "./Square.css";

export class Square extends Component {
  render() {
    return <button className="square">{this.props.numberProps}</button>;
  }
}
