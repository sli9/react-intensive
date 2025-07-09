import s from "./PostsPage.module.css"
import { PostListWithLoading } from "@/widgets/postList"
import { PageTitle } from "@/shared/ui/pageTitle"
import { mockPosts, useFetchMockData } from "@/shared/mocks"

export const PostsPage = () => {
  const { isLoading, data } = useFetchMockData(mockPosts)
  return (
    <div className={s.pageContainer}>
      <PageTitle>Home Page</PageTitle>
      <PostListWithLoading isLoading={isLoading} posts={data} />
    </div>
  )
}
