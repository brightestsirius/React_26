import { createAsyncThunk } from "@reduxjs/toolkit";
import { SLICE } from "./constants";
import service from "./../../service/todos";

const thunks = {
  fetchTodos: createAsyncThunk(`${SLICE}/fetchTodos`, async () => {
    const response = await service.get();
    return response;
  }),
  fetchDeleteItem: createAsyncThunk(`${SLICE}/fetchDeleteItem`, async (id) => {
    await service.delete(id);
    return id;
  }),
  fetchNewItem: createAsyncThunk(`${SLICE}/fetchNewItem`, async (undefined, thunkAPI) => {
    const response = await service.post(thunkAPI.getState().formTodo.newTodo);
    return response;
  }),
};

export default thunks;