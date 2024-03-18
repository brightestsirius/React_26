import React from "react";

export default function TodosListItem({
  item = {},
  handleDelete,
  handleChange,
}) {
  return (
    <li>
      {item.title} <button onClick={() => handleDelete(item.id)}>Delete</button>
      <input
        type="checkbox"
        defaultChecked={item.completed}
        onChange={() => handleChange(item)}
      />
    </li>
  );
}
