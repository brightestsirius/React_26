import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTitle, setCompleted } from './../../store/formTodo/slice'
import thunks from './../../store/todos/thunks'

export default function TodosForm() {
  const { newTodo } = useSelector((state) => state.formTodo);
  const dispatch = useDispatch();

  const handleInputTitle = e => dispatch(setTitle(e.target.value));

  const handleInputCompleted = e => dispatch(setCompleted(e.target.checked));

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(thunks.fetchNewItem());
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title: <input type="text" defaultValue={newTodo.title} onChange={handleInputTitle} />
      </label>
      <label>
        Completed: <input type="checkbox" defaultChecked={newTodo.completed} onChange={handleInputCompleted} />
      </label>
      <button>Add todo</button>
    </form>
  );
}
