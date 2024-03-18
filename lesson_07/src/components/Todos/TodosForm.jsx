import React from "react";

export default function TodosForm({
  newTodo,
  handleSubmit,
  handleTitle,
  handleCompleted,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:{" "}
        <input type="text" value={newTodo.title} onChange={handleTitle} />
      </label>
      <label>
        Completed:{" "}
        <input
          type="checkbox"
          checked={newTodo.completed}
          onChange={handleCompleted}
        />
      </label>
      <button>Add todo</button>
    </form>
  );
}
