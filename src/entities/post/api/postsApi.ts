import { baseApi } from "@/app/api/baseApi.ts"
import type { Post } from "@/widgets/todoList"

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: (posts) => (posts ? posts.map(({ id }) => ({ type: "Posts", id })) : ["Posts"]),
    }),
    getPost: builder.query<Post, { postId: number }>({
      query: ({ postId }) => `/posts/${postId}`,
    }),
  }),
})

export const { useGetPostsQuery, useGetPostQuery } = postsApi
