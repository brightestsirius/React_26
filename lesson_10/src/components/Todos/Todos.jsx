import React, { useReducer, useEffect } from "react";
import { reducer, initialState } from "./../../store/todos/reducer";
import service from "./../../service/todos";
import {
  TODOS_SET,
  TODOS_ITEM_DELETE,
  TODOS_ITEM_CHANGE,
  NEW_TODO_TITLE,
  NEW_TODO_COMPLETED,
  NEW_TODO_SET,
  SET_DEFAULT_TODO,
} from "./../../store/todos/actions";
import { actionCreator } from "./../../store/store";
import "./style.sass";

export default function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      dispatch(actionCreator(TODOS_SET, response));
    })();
  }, []);

  const handleItemDelete = async (id) => {
    await service.delete(id);
    dispatch(actionCreator(TODOS_ITEM_DELETE, id));
  };

  const handleItemCompleted = async (item) => {
    const response = await service.put(item.id, { completed: !item.completed });
    dispatch(actionCreator(TODOS_ITEM_CHANGE, response));
  };

  const handleNewTodoTitle = (e) =>
    dispatch(actionCreator(NEW_TODO_TITLE, e.target.value));

  const handleNewTodoCompleted = (e) =>
    dispatch(actionCreator(NEW_TODO_COMPLETED, e.target.checked));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await service.post(state.newTodo);
    dispatch(actionCreator(NEW_TODO_SET, response));
    dispatch(actionCreator(SET_DEFAULT_TODO));
  };

  return (
    <>
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
      {state.todos.length ? (
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
      ) : null}
    </>
  );
}
