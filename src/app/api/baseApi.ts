import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery } from "@/app/api/baseQuery.ts"

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["Posts"],
  endpoints: () => ({}),
}).injectEndpoints({
  endpoints: () => ({}),
  overrideExisting: false,
})
