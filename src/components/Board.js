import React, { useState } from "react";
import { Square } from "./Square";
import "./Board.css";

export const Board = () => {
  // 공유 state
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Squar 자녀에게 물려 줄 click handle 함수
  const setX = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = "X";
    setSquares(newSquares);
  };

  const renderSquare = (i) => {
    return (
      <Square
        //  Squar 자녀에게 props 형태로 함수 전달
        value={squares[i]}
        handleClick={() => setX(i)}
      />
    );
  };

  return (
    <div>
      <div className="status">Next Player: X, O</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
