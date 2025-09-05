import { createEntityAdapter } from "@reduxjs/toolkit"
import type { TTodo } from "@/entities/todos"

export const todosAdapter = createEntityAdapter<TTodo>({
  sortComparer: (a, b) => a.id - b.id,
})
