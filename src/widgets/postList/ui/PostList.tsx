import s from "./PostList.module.css"
import type { Post } from "@/widgets/postList"
import { withLoading } from "@/shared/lib/hoc"
import { PostCardWithComments } from "@/widgets/postCardWithComments/ui/PostCardWithComments.tsx"
import { memo } from "react"

type PostListProps = {
  posts?: Post[]
}

const PostList = memo(({ posts }: PostListProps) => {
  return (
    <div className={s.list}>
      {!posts || posts.length === 0 ? (
        <div>Посты отсутствуют</div>
      ) : (
        posts.map((post) => <PostCardWithComments post={post} key={post.id} />)
      )}
    </div>
  )
})

export const PostListWithLoading = withLoading(PostList)
