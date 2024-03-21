import React, { useState, useEffect, useMemo, memo } from "react";
import {todos as service} from './../../service/todos'
import './style.sass'

export default memo(function TodosList() {
    
  const [todos, setTodos] = useState([]);
  const [color, setColor] = useState(`#ffffff`);

  useEffect(() => {
    (async () => {
        const response = await service.get();
        setTodos(response.slice(0, 10));
    })();
  }, []);

  const handleCompleted = async item => {
    const response = await service.put(item.id, {completed: !item.completed});
    setTodos(prevState => prevState.map(item => {
        if(item.id === response.id) item = response;
        return item;
    }))
  }

    // const [filteredTodos, setFilteredTodos] = useState([]);
    // useEffect(() => {
    //     setFilteredTodos(todos.sort((a,b) => b.completed-a.completed))
    // }, [todos])

    // const filteredTodos = () => {
    //     console.log(`in sort function`);
    //     return todos.sort((a,b) => b.completed-a.completed);
    // }

    const filteredTodos = useMemo(() => {
        console.log(`in sort function`);
        return todos.sort((a,b) => b.completed-a.completed);
    }, [todos]);

    // useMemo(()=>{}, [...])

  return filteredTodos.length ? (
    <>
        <input type="color" defaultValue={color} onChange={(e) => setColor(e.target.value)} />
        <ul style={{backgroundColor: color}}>
            {filteredTodos.map((item) => (
                <li className={item.completed ? `success` : `error`} key={item.id} onClick={() => handleCompleted(item)}>{item.title}</li>
            ))}
        </ul>
    </>
  ) : null;
});
