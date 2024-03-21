import React, { useState, useEffect, useMemo, useCallback } from "react";
import { todos as service } from "./../../service/todos";
import './style.sass'

export default function List() {
  const [list, setList] = useState([]);
  const [color, setColor] = useState(`#000000`);
  
  const filteredList = useMemo(() => {
    console.log(`in filteredList`);
    return list.sort((a, b) => b.completed - a.completed);
  }, [list]);

  const classNameGenerator = useCallback(() => {
    const completedItems = list.filter(item => item.completed);
    console.log(`in classNameGenerator`);
    return completedItems.length >= Math.round(list.length/2) ? `completed--half` : ``;
  }, [list]);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      setList(response.slice(0, 10));
    })();
  }, []);

  //   const [filteredList, setFilteredList] = useState(list);
  //   useEffect(() => {
  //     setFilteredList(list.sort((a, b) => b.completed - a.completed));
  //   }, [list]);

  const handleCompleted = async item => {
    const response = await service.put(item.id, {completed: !item.completed});
    setList(prevState => prevState.map(item => {
        if(item.id === response.id) item = response;
        return item;
    }))
  }

  return filteredList.length ? (
    <>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <ul className={classNameGenerator()} style={{ backgroundColor: color }}>
        {filteredList.map((item) => (
          <li style={{ color: item.completed ? `green` : `red` }} key={item.id} onClick={() => handleCompleted(item)}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  ) : null;
}