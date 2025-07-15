import s from "./PostDetails.module.css"
import type { Post } from "@/widgets/todoList"

type PostDetailsProps = {
  post: Post
}

export const PostDetails = ({ post }: PostDetailsProps) => {
  return (
    <div className={"flex-container-column " + s.container}>
      <p>User ID: {post.userId}</p>
      <p>Post ID: {post.id}</p>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}
