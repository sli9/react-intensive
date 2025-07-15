import { useParams } from "react-router"
import { mockPosts } from "@/shared/mocks"
import { PostCard } from "@/entities/post"
import s from "./UserPostsPage.module.css"

export const UserPostsPage = () => {
  const { id: userId } = useParams()

  const posts = mockPosts.filter((post) => post.userId === Number(userId))

  if (posts.length === 0) {
    return <div className={"flex-container"}>Нет постов для пользователя ID: {userId}</div>
  }

  return (
    <div className={"flex-container-column " + s.userPosts}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post}>
          <PostCard.PostTitle />
          <PostCard.PostBody />
          <PostCard.PostDetailsLink />
        </PostCard>
      ))}
    </div>
  )
}
