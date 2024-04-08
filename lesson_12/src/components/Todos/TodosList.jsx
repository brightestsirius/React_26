import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import thunks from "./../../store/todos/thunks";

export default function TodosList() {
  const { todos, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.fetchTodos());
  }, []);

  const handleItemDelete = (id) => {
    dispatch(thunks.fetchDeleteItem(id));
  };

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          {item.title}{" "}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : isLoading ? (
    <p>Loading...</p>
  ) : null;
}
