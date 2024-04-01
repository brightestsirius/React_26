import React, { useReducer } from "react";

import Counter from "./components/Counter/Counter";
import CounterReducer from "./components/Counter/CounterReducer";
import CounterHeading from "./components/Counter/CounterHeading";

import { reducer, initialState } from "./store/counter/reducer";

import CounterContext from "./contexts/CounterContext";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <CounterHeading />
      <Counter />
      <CounterReducer />
    </CounterContext.Provider>
  );
}
