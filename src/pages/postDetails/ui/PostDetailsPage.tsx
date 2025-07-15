import { useParams } from "react-router"
import { mockPosts } from "@/shared/mocks"
import { PostCard } from "@/entities/post"

export const PostDetailsPage = () => {
  const { id: postId } = useParams()

  const post = mockPosts[Number(postId) - 1]

  return (
    <PostCard post={post}>
      <PostCard.UserName />
      <PostCard.PostTitle />
      <PostCard.PostBody />
    </PostCard>
  )
}
