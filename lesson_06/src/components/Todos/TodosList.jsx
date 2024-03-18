import React, { useState, useEffect, useRef } from "react";
import { todos as service } from "./../../service/todos";
import "./style.sass";

import TodosListItem from "./TodosListItem";
import TodosForm from "./TodosForm";

export default function TodosList() {
  const [todos, setTodos] = useState([]);

  const inputTitle = useRef();
  const checkboxCompleted = useRef();
  const form = useRef();

  useEffect(() => {
    (async () => {
      const response = await service.get();
      setTodos(response.slice(0, 10));
    })();
  }, []);

  const handleDelete = async (event, id) => {
    event.stopPropagation();

    try {
      await service.delete(id);
      setTodos((prevState) => prevState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleCompleted = async (item) => {
    try {
      const response = await service.put(item.id, {
        completed: !item.completed,
      });

      // const response = await service.get();
      // setTodos(response.slice(0, 10));

      setTodos((prevState) =>
        prevState.map((item) => {
          if (item.id === response.id) item = response;
          return item;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTodo = {
      title: inputTitle.current.value,
      completed: checkboxCompleted.current.checked,
    };

    const response = await service.post(newTodo);

    setTodos((prevState) => [...prevState, response]);
  };

  useEffect(() => {
    if(inputTitle.current.value){
        form.current.reset();
    }
  }, [todos]);

  return (
    <>
      <TodosForm
        inputTitle={inputTitle}
        checkboxCompleted={checkboxCompleted}
        handleSubmit={handleSubmit}
        form={form}
      />

      {todos.length ? (
        <ul>
          {todos.map((item) => (
            <TodosListItem
              item={item}
              key={item.id}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      ) : null}
    </>
  );
}