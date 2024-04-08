import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import todos from "./todos/slice";
import todo from "./todo/slice";

import { postsApi } from "./posts/slice";

export const store = configureStore({
  reducer: {
    todos: todos,
    todo: todo,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

setupListeners(store.dispatch);
