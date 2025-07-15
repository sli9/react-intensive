import { baseApi } from "@/app/api/baseApi.ts"
import type { TUser, User } from "@/entities/user"

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], void>({
      query: () => "/users",
      transformResponse: (response: User[]) => response.map(({ id, name }) => ({ userId: id, userName: name })),
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
