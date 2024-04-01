import React from "react";
import "./style.sass";

import TodosContext from "./../../contexts/TodosContext";

import TodosList from "./TodosList";
import TodosForm from "./TodosForm";

import useTodos from "./../../hooks/useTodos";

export default function Todos() {
  const todos = useTodos();

  return (
    <TodosContext.Provider value={{ ...todos }}>
      <TodosForm />
      <TodosList />
    </TodosContext.Provider>
  );
}
