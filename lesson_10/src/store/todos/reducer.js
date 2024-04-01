import {
  TODOS_SET,
  TODOS_ITEM_DELETE,
  TODOS_ITEM_CHANGE,
  NEW_TODO_TITLE,
  NEW_TODO_COMPLETED,
  NEW_TODO_SET,
  SET_DEFAULT_TODO,
} from "./actions";

import { DEFAULT_TODO } from "./constants";

const initialState = {
  todos: [],
  newTodo: DEFAULT_TODO,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case TODOS_SET:
      return { ...state, todos: payload };
    case TODOS_ITEM_DELETE:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload),
      };
    case TODOS_ITEM_CHANGE:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === payload.id) item = payload;
          return item;
        }),
      };
    case NEW_TODO_TITLE:
      return { ...state, newTodo: { ...state.newTodo, title: payload } };
    case NEW_TODO_COMPLETED:
      return { ...state, newTodo: { ...state.newTodo, completed: payload } };
    case NEW_TODO_SET:
      return { ...state, todos: [...state.todos, payload] };
    case SET_DEFAULT_TODO:
      return { ...state, newTodo: DEFAULT_TODO };
    default:
      return state;
  }
};

export { reducer, initialState };
