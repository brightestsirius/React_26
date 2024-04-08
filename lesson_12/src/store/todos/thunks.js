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
  fetchTodo: createAsyncThunk(
    `${SLICE}/fetchTodo`,
    async (undefined, thunkApi) => {
      const todo = thunkApi.getState().todo.newTodo;
      const response = await service.post(todo);
      return response;
    }
  ),
};

export default thunks;