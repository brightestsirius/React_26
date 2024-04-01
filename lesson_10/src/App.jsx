import React, {useReducer} from "react";

import Counter from "./components/Counter/Counter";
import CounterReducer from './components/Counter/CounterReducer'
import CounterHeading from './components/Counter/CounterHeading'
import Todos from './components/Todos/Todos'

import CounterContext from './contexts/CounterContext'

import {reducer, initialState} from './store/counter/reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* <Counter />

      <CounterContext.Provider value={ {state, dispatch} }>
        <CounterHeading />
        <CounterReducer />
      </CounterContext.Provider> */}

      <Todos />
    </>
  );
}