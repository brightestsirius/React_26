import React from "react";

export default function TodosForm({
  inputTitle,
  checkboxCompleted,
  handleSubmit,
  form
}) {
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <label>
        Title: <input type="text" ref={inputTitle} />
      </label>
      <label>
        Completed: <input type="checkbox" ref={checkboxCompleted} />
      </label>
      <button>Add todo</button>
    </form>
  );
}
