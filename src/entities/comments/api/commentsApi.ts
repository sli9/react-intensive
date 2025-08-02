import { baseApi } from "@/app/api/baseApi.ts"
import type { Comment } from "./commentsApi.types.ts"

export const commentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], { postId: number }>({
      query: ({ postId }) => ({
        url: `posts/${postId}/comments`,
      }),
      providesTags: (comments) =>
        comments
          ? [...comments.map(({ id }) => ({ type: "Comments", id }) as const), { type: "Comments", id: "LIST" }]
          : ["Posts"],
    }),
    addComment: builder.mutation<Comment[], Comment>({
      query: ({ postId, ...rest }) => ({
        url: `posts/${postId}/comments`,
        method: "POST",
        body: rest,
      }),
      async onQueryStarted(newComment, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          commentsApi.util.updateQueryData("getComments", { postId: newComment.postId }, (draft) => {
            draft.unshift(newComment)
          })
        )

        try {
          await queryFulfilled
        } catch (error) {
          patchResult.undo()
          console.log("Не удалось добавить комментарий", error)
        }
      },
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),
  }),
})

export const { useLazyGetCommentsQuery, useAddCommentMutation } = commentsApi
