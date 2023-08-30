import React, { Component } from "react";
import "./Square.css";

export class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberProps: null,
    };
  }
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          /* state settet */
          this.setState({ numberProps: "X" });
        }}
      >
        {this.state.numberProps /* state 접근 */}
      </button>
    );
  }
}
