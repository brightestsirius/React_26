import React, { useContext } from "react";

import CounterContext from "../../contexts/CounterContext";

export default function CounterHeading() {
  const { state } = useContext(CounterContext);
  return <h4>Counter: {state.counter}</h4>;
}