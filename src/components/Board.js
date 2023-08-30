import React, { Component } from "react";
import { Square } from "./Square";
import "./Board.css";

export class Board extends Component {
  // 공유 state
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  // Squar 자녀에게 물려 줄 click handle 함수
  setX(i) {
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        //  Squar 자녀에게 props 형태로 함수 전달
        handleClick={() => this.setX(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="status">Next Player: X, O</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
