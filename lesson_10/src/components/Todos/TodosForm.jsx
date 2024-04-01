import React, { useContext } from "react";

import TodosContext from "../../contexts/TodosContext";

export default function TodosForm() {
  const { state, handleSubmit, handleNewTodoTitle, handleNewTodoCompleted } =
    useContext(TodosContext);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          value={state.newTodo.title}
          onChange={handleNewTodoTitle}
        />
      </label>
      <label>
        Completed:{" "}
        <input
          type="checkbox"
          checked={state.newTodo.completed}
          onChange={handleNewTodoCompleted}
        />
      </label>
      <button>Add todo</button>
    </form>
  );
}
