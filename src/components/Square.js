import React, { Component } from "react";
import "./Square.css";

export class Square extends Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          console.log("클릭하지 마셈~");
        }}
      >
        {this.props.numberProps}
      </button>
    );
  }
}
