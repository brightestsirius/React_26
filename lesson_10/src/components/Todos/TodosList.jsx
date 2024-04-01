import React, { useContext } from "react";

import TodosContext from "../../contexts/TodosContext";

export default function TodosList() {
  const { state, handleItemDelete, handleItemCompleted } =
    useContext(TodosContext);

  return state.todos.length ? (
    <ul>
      {state.todos.map((item) => (
        <li key={item.id}>
          {item.title}{" "}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleItemCompleted(item)}
          />
        </li>
      ))}
    </ul>
  ) : null;
}
