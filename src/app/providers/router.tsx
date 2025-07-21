import { lazy } from "react"
import { MainLayout, PageLayout } from "@/shared/layouts"
import { createBrowserRouter, Navigate, type RouteObject } from "react-router"
import { Paths } from "@/shared/config"
import { PageNotFound } from "@/pages/pageNotFound"
import { GlobalErrorBoundary } from "@/shared/ui/errorBoundary/GlobalErrorBoundary.tsx"
import { withSuspenseAndErrorBoundary } from "@/shared/lib/hoc"

const PostListPage = lazy(() => import("@/pages/post"))
const PostDetailsPage = lazy(() => import("@/pages/postDetails"))
const UserAlbumsPage = lazy(() => import("@/pages/userAlbums"))
const AlbumPhotosPage = lazy(() => import("@/pages/albumPhotosPage"))
const UserTodosPage = lazy(() => import("@/pages/userTodosPage"))
const UserPostsPage = lazy(() => import("@/pages/user"))

const routes: RouteObject[] = [
  {
    path: Paths.Main.pathname,
    Component: () => (
      <GlobalErrorBoundary>
        <MainLayout />
      </GlobalErrorBoundary>
    ),
    children: [
      { index: true, element: <Navigate to={Paths.Posts.pathname} /> },
      { path: Paths.Posts.pathname, Component: withSuspenseAndErrorBoundary(PostListPage) },
      { path: Paths.NotFound.pathname, Component: () => <PageNotFound /> },
      {
        Component: PageLayout,
        children: [
          {
            path: Paths.UserPosts.pathname,
            handle: { title: `${Paths.UserPosts.text} пользователя ID:`, withTabs: true },
            Component: withSuspenseAndErrorBoundary(UserPostsPage),
          },
          {
            path: Paths.PostDetails.pathname,
            handle: { title: `${Paths.PostDetails.text} ID:`, withTabs: false },
            Component: withSuspenseAndErrorBoundary(PostDetailsPage),
          },
          {
            path: Paths.UserAlbums.pathname,
            handle: { title: `${Paths.UserAlbums.text} пользователя ID:`, withTabs: false },
            Component: withSuspenseAndErrorBoundary(UserAlbumsPage),
          },
          {
            path: Paths.AlbumPhotos.pathname,
            handle: { title: `${Paths.AlbumPhotos.text} из альбома ID:`, withTabs: false },
            Component: withSuspenseAndErrorBoundary(AlbumPhotosPage),
          },
          {
            path: Paths.UserTodos.pathname,
            handle: { title: `${Paths.UserTodos.text} пользователя ID:`, withTabs: false },
            Component: withSuspenseAndErrorBoundary(UserTodosPage),
          },
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
