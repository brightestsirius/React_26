import React, { useState, useEffect } from "react";
import service from "./../../service/todos";
import "./style.sass";

import TodosListItem from "./TodosListItem";
import TodosForm from './TodosForm';

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: ``,
    completed: false,
  });

  useEffect(() => {
    (async () => {
      const response = await service.get();
      setTodos(response.slice(0, 10));
    })();
  }, []);

  const handleDelete = async (id) => {
    await service.delete(id);
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleChange = async (item) => {
    const response = await service.patch(item.id, {
      completed: !item.completed,
    });
    setTodos((prevState) =>
      prevState.map((el) => {
        if (el.id === response.id) el = response;
        return el;
      })
    );
  };

  const handleTitle = (e) => {
    setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const handleCompleted = (e) => {
    setNewTodo((prevState) => ({ ...prevState, completed: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await service.post(newTodo);
    setTodos((prevState) => [...prevState, response]);
  };

  return (
    <>
      <TodosForm newTodo={newTodo} handleTitle={handleTitle} handleCompleted={handleCompleted} handleSubmit={handleSubmit} />
      {todos.length ? (
        <ul>
          {todos.map((item) => (
            <TodosListItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleChange={handleChange}
            />
          ))}
        </ul>
      ) : null}
    </>
  );
}
