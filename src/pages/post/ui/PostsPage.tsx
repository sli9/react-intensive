import s from "./PostsPage.module.css"
import { PostList } from "@/widgets/postList"
import { PageTitle } from "@/shared/components/pageTitle"

export const PostsPage = () => {
  return (
    <div className={s.pageContainer}>
      <PageTitle>Home Page</PageTitle>
      <PostList />
    </div>
  )
}
