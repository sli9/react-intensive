import s from "./PostList.module.css"
import { PostCard } from "@/entities/post"
import { mockPosts } from "@/shared/mocks"

export const PostList = () => {
  return (
    <div className={s.list}>
      {mockPosts?.slice(0, 10).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
