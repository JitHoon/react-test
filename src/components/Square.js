import React from "react";
import "./Square.css";

export const Square = ({ value, handleClick }) => {
  return (
    <button className="square" onClick={handleClick /* props 함수 가져오기*/}>
      {value /* props 접근 */}
    </button>
  );
};
