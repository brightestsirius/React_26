import React, { memo } from "react";
import useList from "./../../hooks/useList";

export default memo(function List() {
  const { color, setColor, getClass, sortedList, deleteItem, handleSort, sort } = useList();

  const handleDelete = (index) => {
    alert(`Click me!`);
    deleteItem(index);
  }

  return (
    <>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <br /><br />  
      <div>
        <select onChange={handleSort} defaultValue={sort}>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </div>

      <ul className={getClass()} style={{ color }}>
        {sortedList.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
});
