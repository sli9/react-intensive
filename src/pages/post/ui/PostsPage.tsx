import { PostList } from "@/widgets/postList"
import { PageTitle } from "@/shared/ui/pageTitle"

export const PostsPage = () => {
  return (
    <div className={"page-container"}>
      <PageTitle>Главная</PageTitle>
      <PostList />
    </div>
  )
}
