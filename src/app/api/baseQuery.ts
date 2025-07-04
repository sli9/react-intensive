import { type BaseQueryApi, type FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query"
import { handleError } from "@/app/api/handleError.ts"

export const baseQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
  const result = await fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  })(args, api, extraOptions)

  handleError(result)

  return result
}
