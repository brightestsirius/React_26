import React, { useContext } from "react";

import TodosContext from "../../contexts/TodosContext";

export default function TodosForm() {
  const { state, handleSubmit, handleNewTodoTitle } = useContext(TodosContext);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          defaultValue={state.newTodo.title}
          onChange={handleNewTodoTitle}
        />
      </label>
      <button>Add todo</button>
    </form>
  );
}
