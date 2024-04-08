import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "./constants";
import thunks from "./thunks";

const initialState = {
  todos: [],
  isLoading: true,
};

export const slice = createSlice({
  name: SLICE,
  initialState,
  reducers: {
    setTodos: (state, { payload }) => {
      state.todos = payload;
    },
    deleteItem: (state, { payload }) => {
      state.todos = state.todos.filter((item) => item.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchTodos.fulfilled, (state, { payload }) => {
        state.todos = payload.slice(0, 10);
        state.isLoading = false;
      })
      .addCase(thunks.fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunks.fetchDeleteItem.fulfilled, (state, { payload }) => {
        state.todos = state.todos.filter((item) => item.id !== payload);
      })
      .addCase(thunks.fetchTodo.fulfilled, (state, { payload }) => {
        state.todos = [...state.todos, payload];
      });
  },
});

export default slice.reducer;
