import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  setInputValue,
} from "./../../store/counter/reducer";

export default function Counter() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleDecrement = () => dispatch(decrement());
  const handleIncrement = () => dispatch(increment());

  const handleInputValue = (e) => dispatch(setInputValue(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount());
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button> <span>{value}</span>{" "}
      <button onClick={handleIncrement}>+</button>
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleInputValue} />
      </form>
    </div>
  );
}
