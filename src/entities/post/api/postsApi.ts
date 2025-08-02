import { baseApi } from "@/app/api/baseApi.ts"
import type { Post } from "@/entities/post"

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: (posts) =>
        posts ? [...posts.map(({ id }) => ({ type: "Posts", id }) as const), { type: "Posts", id: "LIST" }] : ["Posts"],
    }),
    getPost: builder.query<Post, { postId: number }>({
      query: ({ postId }) => `/posts/${postId}`,
    }),
    deletePost: builder.mutation<object, { postId: number }>({
      query: ({ postId }) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),
      async onQueryStarted({ postId }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          postsApi.util.updateQueryData("getPosts", undefined, (draft) => {
            const index = draft.findIndex((post) => post.id === postId)
            if (index !== -1) {
              draft.splice(index, 1)
            }
          })
        )

        try {
          await queryFulfilled
        } catch (error) {
          patchResult.undo()
          console.log("Не удалось удалить пост", error)
        }
      },
      invalidatesTags: (result, error, { postId }) => [{ type: "Posts", id: postId }],
    }),
  }),
})

export const { useGetPostsQuery, useGetPostQuery, useDeletePostMutation } = postsApi
