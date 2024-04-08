import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTitle, setCompleted } from "./../../store/todo/slice";
import thunks from './../../store/todos/thunks'

export default function TodosForm() {
  const { newTodo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleInput = (e) => dispatch(setTitle(e.target.value));

  const handleCompleted = (e) => dispatch(setCompleted(e.target.checked));

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(thunks.fetchTodo());
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          defaultValue={newTodo.title}
          onChange={handleInput}
        />
      </label>
      <label>
        Completed:{" "}
        <input
          type="checkbox"
          defaultChecked={newTodo.completed}
          onChange={handleCompleted}
        />
      </label>
      <button>Add item</button>
    </form>
  );
}
