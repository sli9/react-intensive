import { useParams } from "react-router"
import { PostCard, useGetPostQuery } from "@/entities/post"
import { CommentsList } from "@/widgets/comment"

export const PostDetailsPage = () => {
  const { id: postId } = useParams()

  const { data: post } = useGetPostQuery({ postId: Number(postId) })

  return (
    post && (
      <PostCard post={post}>
        <PostCard.UserName />
        <PostCard.PostTitle />
        <PostCard.PostBody />
        <hr style={{ margin: "1em auto" }} />
        <CommentsList postId={post.id} />
      </PostCard>
    )
  )
}
