import React from "react";

export default function TodosListItem({
  item = {},
  handleCompleted,
  handleDelete,
}) {
  return (
    <li
      key={item.id}
      style={{ color: item.completed ? `green` : `red` }}
      onClick={() => handleCompleted(item)}
    >
      {item.title}
      <button onClick={(event) => handleDelete(event, item.id)}>Delete</button>
    </li>
  );
}
