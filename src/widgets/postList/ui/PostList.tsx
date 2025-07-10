import s from "./PostList.module.css"
import type { Post } from "@/widgets/postList"
import { withLoading } from "@/shared/lib/hoc"
import { PostCardWithComments } from "@/widgets/postCardWithComments/ui/PostCardWithComments.tsx"

type PostListProps = {
  posts: Post[] | null
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={s.list}>
      {posts?.slice(0, 10).map((post) => (
        <PostCardWithComments post={post} key={post.id} />
      ))}
    </div>
  )
}

export const PostListWithLoading = withLoading(PostList)
