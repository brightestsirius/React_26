import React, { useReducer, useEffect } from "react";

import { actionCreator } from "../store/store";
import { reducer, initialState } from "./../store/todos/reducer";
import actions from "./../store/todos/actions";
import service from "../service/todos";

export default function useTodos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      dispatch(actionCreator(actions.TODOS_SET, response));
    })();
  }, []);

  const handleItemDelete = async (id) => {
    await service.delete(id);
    dispatch(actionCreator(actions.TODOS_ITEM_DELETE, id));
  };

  const handleItemCompleted = async (item) => {
    const response = await service.put(item.id, { completed: !item.completed });
    dispatch(actionCreator(actions.TODOS_ITEM_CHANGE, response));
  };

  const handleNewTodoTitle = (e) =>
    dispatch(actionCreator(actions.NEW_TODO_TITLE, e.target.value));

  const handleNewTodoCompleted = (e) =>
    dispatch(actionCreator(actions.NEW_TODO_COMPLETED, e.target.checked));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await service.post(state.newTodo);
    dispatch(actionCreator(actions.NEW_TODO_SET, response));
    dispatch(actionCreator(actions.SET_DEFAULT_TODO));
  };

  return {
    state,
    dispatch,
    handleItemDelete,
    handleItemCompleted,
    handleNewTodoTitle,
    handleNewTodoCompleted,
    handleSubmit,
  };
}
