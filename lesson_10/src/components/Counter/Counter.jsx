import React, { useState } from "react";
import "./style.sass";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState();

  const decrement = () => setCounter((prevState) => prevState - 1);

  const increment = () => setCounter((prevState) => prevState + 1);

  const handleValue = (e) => setInputValue(+e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(inputValue);
  };

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>

      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleValue} />
      </form>
    </div>
  );
}
