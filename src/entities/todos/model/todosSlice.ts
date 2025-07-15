import { createSlice } from "@reduxjs/toolkit"
import { todosAdapter } from "./todosAdapter.ts"
import { todosApi } from "@/entities/todos"

const todosSlice = createSlice({
  name: "todos",
  initialState: todosAdapter.getInitialState(),
  reducers: {
    changeTodoPriority(state, { payload }) {
      const todo = state.entities[payload.id]
      if (todo) todo.priority = payload.priority
    },
    changeTodoStatus(state, { payload }) {
      const todo = state.entities[payload.id]
      if (todo) todo.completed = payload.status
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(todosApi.endpoints.getTodos.matchFulfilled, (state, action) => {
      todosAdapter.setAll(state, action.payload)
    })
  },
})

export const todosReducer = todosSlice.reducer

export const { changeTodoPriority, changeTodoStatus } = todosSlice.actions
