import React, { useContext } from "react";
import "./style.sass";

import CounterContext from "../../contexts/CounterContext";

import {
  COUNTER_DEC,
  COUNTER_INC,
  INPUT_VALUE,
  COUNTER_SET,
} from "./../../store/counter/actions";
import { actionCreator } from "./../../store/store";

export default function CounterReducer() {
  const { dispatch, state } = useContext(CounterContext);

  const handleDecrement = () => dispatch(actionCreator(COUNTER_DEC));

  const handleIncrement = () => dispatch(actionCreator(COUNTER_INC));

  const handleInputValue = (e) =>
    dispatch(actionCreator(INPUT_VALUE, e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionCreator(COUNTER_SET));
  };

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{state.counter}</span>
      <button onClick={handleIncrement}>+</button>

      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleInputValue} />
      </form>
    </div>
  );
}
