export const Paths = {
  Main: {
    getLink: () => "/",
    pathname: "/",
    text: "",
  },
  Posts: {
    getLink: () => `/posts`,
    pathname: "/posts",
    text: "",
  },
  PostDetails: {
    getLink: (id: number) => `/posts/${id}`,
    pathname: "/posts/:id",
    text: "Пост",
  },
  UserPosts: {
    getLink: (id: number) => `/users/${id}`,
    pathname: "/users/:id",
    text: "Посты",
  },
  UserAlbums: {
    getLink: (id: number) => `/users/${id}/albums`,
    pathname: "users/:id/albums",
    text: "Альбомы",
  },
  AlbumPhotos: {
    getLink: (id: number) => `/albums/${id}/photos`,
    pathname: "albums/:id/photos",
    text: "Фотографии",
  },
  UserTodos: {
    getLink: (id: number) => `/users/${id}/todos`,
    pathname: "users/:id/todos",
    text: "Задачи",
  },
  NotFound: {
    name: "notFound",
    getLink: () => "*",
    pathname: "*",
    text: "404",
  },
} as const
