import { baseApi } from "@/app/api/baseApi.ts"
import type { Album, Photo } from "./albumsApi.types.ts"

export const albumsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], { userId: number }>({
      query: ({ userId }) => ({
        url: `users/${userId}/albums`,
      }),
    }),
    getAlbumPhotos: builder.query<Photo[], { albumId: number }>({
      query: ({ albumId }) => ({
        url: `albums/${albumId}/photos`,
      }),
    }),
  }),
})

export const { useGetAlbumsQuery, useGetAlbumPhotosQuery } = albumsApi
