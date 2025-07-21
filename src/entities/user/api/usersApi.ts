import { baseApi } from "@/app/api/baseApi.ts"
import type { TUser, User } from "@/entities/user"
import type { Post } from "@/entities/post"

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], void>({
      query: () => "/users",
      transformResponse: (response: User[]) => response.map(({ id, name }) => ({ userId: id, userName: name })),
    }),
    getUserPosts: builder.query<Post[], { userId: number }>({
      query: ({ userId }) => `/users/${userId}/posts`,
    }),
  }),
})

export const { useGetUsersQuery, useGetUserPostsQuery } = usersApi
