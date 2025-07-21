import { createSlice } from "@reduxjs/toolkit"
import { usersAdapter } from "./usersAdapter.ts"
import { usersApi } from "@/entities/user"

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(usersApi.endpoints.getUsers.matchFulfilled, (state, action) => {
      usersAdapter.setAll(state, action.payload)
    })
  },
})

export const usersReducer = usersSlice.reducer
