import { useParams } from "react-router"
import { mockPosts } from "@/shared/mocks"
import { PostCard } from "@/entities/post"

export const PostDetailsPage = () => {
  const { id: postId } = useParams()

  const post = mockPosts.find((post) => post.id === Number(postId))

  if (!post) {
    return <div>Такого поста не существует</div>
  }

  return (
    <PostCard post={post}>
      <PostCard.UserName />
      <PostCard.PostTitle />
      <PostCard.PostBody />
    </PostCard>
  )
}
