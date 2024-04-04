import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  inputValue: undefined,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state) => {
      state.value = state.inputValue;
    },
    setInputValue: (state, action) => {
      state.inputValue = +action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setInputValue } =
  counterSlice.actions;

export default counterSlice.reducer;
