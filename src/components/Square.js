import React, { Component } from "react";
import "./Square.css";

export class Square extends Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.handleClick() /* props 함수 가져오기*/}
      >
        {this.props.value /* state 접근 */}
      </button>
    );
  }
}
