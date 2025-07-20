import { baseApi } from "@/app/api/baseApi.ts"
import type { Album } from "./albumsApi.types.ts"

export const albumsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], { userId: number }>({
      query: ({ userId }) => ({
        url: `users/${userId}/albums`,
      }),
    }),
  }),
})

export const { useGetAlbumsQuery } = albumsApi
