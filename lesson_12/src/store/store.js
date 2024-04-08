import { configureStore } from '@reduxjs/toolkit'

import todos from './todos/slice'
import formTodo from './formTodo/slice'

export const store = configureStore({
  reducer: {
    todos: todos,
    formTodo: formTodo
  },
})