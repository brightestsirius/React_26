import { createSlice } from "@reduxjs/toolkit";
import { SLICE, DEFAULT_NEW_TODO } from "./constants";

const initialState = { newTodo: DEFAULT_NEW_TODO };

const slice = createSlice({
  name: SLICE,
  initialState,
  reducers: {
    setTitle: (state, { payload }) => {
      state.newTodo.title = payload;
    },
    setCompleted: (state, { payload }) => {
      state.newTodo.completed = payload;
    },
  },
});

export const { setTitle, setCompleted } = slice.actions;
export default slice.reducer;
