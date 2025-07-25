import { todosAdapter } from "./todosAdapter.ts"
import type { RootState } from "@/app/model/store.ts"

const selectors = todosAdapter.getSelectors((state: RootState) => state.todos)

export const { selectAll: selectAllTodos, selectById: selectTodoById } = selectors
