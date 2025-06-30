import s from "./PostCard.module.css"
import type { Post } from "@/widgets/postList"

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  return (
    <div className={s.card}>
      <div>
        <p>User ID: {post.id}</p>
      </div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}
