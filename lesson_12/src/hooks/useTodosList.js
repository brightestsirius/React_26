import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import thunks from "./../store/todos/thunks";

export default function useTodosList() {
  const { todos, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.fetchTodos());
  }, []);

  const itemDelete = (id) => dispatch(thunks.fetchDeleteItem(id));

  return { todos, isLoading, itemDelete };
}
