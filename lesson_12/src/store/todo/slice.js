import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "./constants";

const initialState = {
  newTodo: {
    title: ``,
    completed: false,
  },
};

export const slice = createSlice({
  name: SLICE,
  initialState,
  reducers: {
    setTitle: (state, { payload }) => {
      state.newTodo.title = payload;
    },
    setCompleted: (state, { payload }) => {
      state.newTodo.completed = payload;
    },
  }
});

export const { setTitle, setCompleted } = slice.actions;

export default slice.reducer;