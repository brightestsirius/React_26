import React, { useState, useContext } from "react";

import { actionCreator } from "./../../store/store";
import actions from "./../../store/counter/actions";

import CounterContext from "../../contexts/CounterContext";

export default function CounterReducer() {
  const [color, setColor] = useState(`red`);
  const {state, dispatch} = useContext(CounterContext);

  const handleDecrement = () =>
    dispatch(actionCreator(actions.COUNTER_DECREMENT)); // {type: COUNTER_DECREMENT}

  const handleIncrement = () =>
    dispatch(actionCreator(actions.COUNTER_INCREMENT));

  const handleInputValue = (e) =>
    dispatch(actionCreator(actions.INPUT_VALUE_SET, e.target.value)); // {type: INPUT_VALUE_SET, payload: ...}

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionCreator(actions.COUNTER_SET)); // {type: COUNTER_SET}
  };

  const handleSetTen = () => dispatch(actionCreator(actions.COUNTER_SET_TEN)); // {type: COUNTER_SET_TEN}

  return (
    <div className="counter" style={{ color }}>
      <button onClick={handleDecrement}>-</button>
      <span>{state.counter}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleSetTen}>Set + 10</button>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputValue} />
      </form>
    </div>
  );
}
