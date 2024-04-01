import actions from "./actions";

import { DEFAULT_TODO } from "./constants";

const initialState = {
  todos: [],
  newTodo: DEFAULT_TODO,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.TODOS_SET:
      return { ...state, todos: payload };
    case actions.TODOS_ITEM_DELETE:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload),
      };
    case actions.TODOS_ITEM_CHANGE:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === payload.id) item = payload;
          return item;
        }),
      };
    case actions.NEW_TODO_TITLE:
      return { ...state, newTodo: { ...state.newTodo, title: payload } };
    case actions.NEW_TODO_COMPLETED:
      return { ...state, newTodo: { ...state.newTodo, completed: payload } };
    case actions.NEW_TODO_SET:
      return { ...state, todos: [...state.todos, payload] };
    case actions.SET_DEFAULT_TODO:
      return { ...state, newTodo: DEFAULT_TODO };
    default:
      return state;
  }
};

export { reducer, initialState };
