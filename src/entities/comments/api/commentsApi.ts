import { baseApi } from "@/app/api/baseApi.ts"
import type { Comment } from "../model/commentsApi.types.ts"

export const commentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], { postId: number }>({
      query: ({ postId }) => ({
        url: `posts/${postId}/comments`,
      }),
    }),
  }),
})

export const { useLazyGetCommentsQuery } = commentsApi
