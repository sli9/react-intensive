import { createSlice } from "@reduxjs/toolkit"
import { postsAdapter } from "./postsAdapter.ts"
import { postsApi } from "@/entities/post"

const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(postsApi.endpoints.getPosts.matchFulfilled, (state, action) => {
      postsAdapter.setAll(state, action.payload)
    })
    builder.addMatcher(postsApi.endpoints.deletePost.matchFulfilled, (state, action) => {
      postsAdapter.removeOne(state, action.meta.arg.originalArgs.postId)
    })
  },
})

export const postReducer = postsSlice.reducer
