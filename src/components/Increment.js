import React from "react";
import "./Increment.css";

const Increment = () => {
  const [count, setCount] = React.useState(0);

  const add = () => {
    setCount((count) => count + 1);
  };

  const subtract = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="counter">
      <span className="count">{count}</span>
      <div className="btns">
        <button className="buttn" onClick={add}>
          Add
        </button>
        <button className="buttn" onClick={subtract}>
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Increment;
