import { COUNTER_DEC, COUNTER_INC, INPUT_VALUE, COUNTER_SET } from "./actions";

const initialState = {
  counter: 0,
  inputValue: undefined,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case COUNTER_DEC:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_INC:
      return { ...state, counter: state.counter + 1 };
    case INPUT_VALUE:
      return { ...state, inputValue: +payload };
    case COUNTER_SET:
      return { ...state, counter: state.inputValue };
    default:
      return state;
  }
};

export { reducer, initialState };
