import s from "./PostList.module.css"
import { PostCard } from "@/entities/post"
import type { Post } from "@/widgets/postList"
import { withLoading } from "@/shared/lib/hoc"

type PostListProps = {
  posts: Post[] | null
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={s.list}>
      {posts?.slice(0, 10).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export const PostListWithLoading = withLoading(PostList)
