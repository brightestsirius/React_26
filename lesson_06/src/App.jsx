import React, { useState, useEffect } from "react";
import Table from "./components/Table/Table";
import TodosList from './components/Todos/TodosList'

export default function App() {
  const [animals] = useState([
    { type: `turtle`, icon: `🐢` },
    { type: `octopus`, icon: `🐙` },
    { type: `fish`, icon: `🐠` },
    { type: `flamingo`, icon: `🦩` },
    { type: `penguin`, icon: `🐧` },
  ]);
  const [showTable, setShowTable] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTable(false);
    }, 3000)
  }, [])

  return (
    <>
      {/* {showTable && <Table list={animals} />} */}
      <TodosList />
    </>
  );
}
