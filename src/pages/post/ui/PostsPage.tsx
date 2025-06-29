import { PageTitle } from "@/shared/components/pageTitle/PageTitle.tsx"
import s from "./PostsPage.module.css"

export const PostsPage = () => {
  return (
    <div className={s.pageContainer}>
      <PageTitle>Home Page</PageTitle>
      <div className={`flex-container-column ${s.pageContent}`}>PostsList</div>
    </div>
  )
}
