import React from "react";

import TodosForm from "./TodosForm";
import TodosList from "./TodosList";

import TodosContext from "./../../contexts/TodosContext";

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