import React, { useState } from "react";
import { Square } from "./Square";
import "./Board.css";

export const Board = () => {
  // 공유 state
  const [squares, setSquares] = useState(Array(9).fill(null));

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]; // i= 1일때 a=0, b=1, ,c=2 로

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c] // [x,x,x]인지 확인
      ) {
        return squares[a]; // 3가지가 같다면 같은 문구 출력 X or O
      }
    }
    return null; // 하나라도 틀리면 null 반환
  };

  const winner = calculateWinner(squares);
  let status;
  const [xIsNext, setXIsNext] = useState(true);

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  // Squar 자녀에게 물려 줄 click handle 함수
  const setX = (i) => {
    const newSquares = squares.slice();

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? "X" : "O";
    setXIsNext((current) => !current);
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
      <div className="status">{status}</div>
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
