import type { Post } from "@/widgets/postList"

type PostCardProps = {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <>
      <div>
        <p>User ID: {post.id}</p>
      </div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  )
}
