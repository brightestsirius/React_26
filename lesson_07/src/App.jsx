import React, { useState } from "react";
import List from "./components/List/List";
import TodosList from './components/Todos/TodosList'

export default function App() {
  const [animals] = useState([
    { type: `turtle`, icon: `🐢` },
    { type: `octopus`, icon: `🐙` },
    { type: `fish`, icon: `🐠` },
    { type: `flamingo`, icon: `🦩` },
    { type: `penguin`, icon: `🐧` },
  ]);

  return (
    <>
      <List list={animals} />
      <TodosList />
    </>
  );
}
