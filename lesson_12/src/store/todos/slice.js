import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "./constants";

import thunks from "./thunks";

const initialState = {
  todos: [],
  isLoading: true,
  error: ``
};

export const slice = createSlice({
  name: SLICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchTodos.fulfilled, (state, {payload}) => {
       state.todos = payload;
       state.isLoading = false;
      })
      .addCase(thunks.fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunks.fetchTodos.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(thunks.fetchDeleteItem.fulfilled, (state, {payload}) => {
        state.todos = state.todos.filter(item => item.id !== payload);
        state.isLoading = false;
       })
       .addCase(thunks.fetchNewItem.fulfilled, (state, {payload}) => {
        state.todos = [...state.todos, payload];
       })
  },
});

export default slice.reducer;
