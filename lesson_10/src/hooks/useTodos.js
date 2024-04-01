import React, { useReducer, useEffect } from "react";

import { reducer, initialState } from "./../store/todos/reducer";
import { actionCreator } from "./../store/store";
import actions from "./../store/todos/actions";

import service from "./../service/todos";

export default function useTodos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      dispatch(actionCreator(actions.GET_TODOS, response)); // {type: `GET_TODOS`, payload: response};
    })();
  }, []);

  const handleItemDelete = async (id) => {
    try {
      await service.delete(id);
      dispatch(actionCreator(actions.TODOS_ITEM_DELETE, id)); // {type: `TODOS_ITEM_DELETE`, payload: id}
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemCompleted = async (item) => {
    const response = await service.put(item.id, { completed: !item.completed });
    dispatch(actionCreator(actions.TODOS_ITEM_CHANGE, response));
  };

  const handleNewTodoTitle = (e) =>
    dispatch(actionCreator(actions.NEW_TODO_TITLE, e.target.value));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await service.post(state.newTodo);
    dispatch(actionCreator(actions.ADD_NEW_TODO, response));
  };

  return {
    state,
    dispatch,
    handleItemDelete,
    handleItemCompleted,
    handleNewTodoTitle,
    handleSubmit,
  };
}
