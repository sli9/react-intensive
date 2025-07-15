import { PageTitle } from "@/shared/components/pageTitle"
import { PostList } from "@/widgets/postList"

export const PostsPage = () => {
  return (
    <div className={"page-container"}>
      <PageTitle>Главная</PageTitle>
      <PostList />
    </div>
  )
}
