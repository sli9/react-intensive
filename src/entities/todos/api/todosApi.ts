import { baseApi } from "@/app/api/baseApi.ts"
import type { Todo, TTodo } from "./todosApi.types"
import { TodoPriority } from "@/entities/todos"

export const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TTodo[], { userId: number }>({
      query: ({ userId }) => ({
        url: `users/${userId}/todos`,
      }),
      transformResponse: (response: Todo[]) => response.map((todo) => ({ ...todo, priority: TodoPriority.Low })),
    }),
  }),
})

export const { useGetTodosQuery } = todosApi
