import { useParams } from "react-router"
import { PostCard } from "@/entities/post"
import s from "./UserPostsPage.module.css"
import { useGetUserPostsQuery } from "@/entities/user"

export const UserPostsPage = () => {
  const { id: userId } = useParams()

  const { data: userPosts, isLoading } = useGetUserPostsQuery({ userId: Number(userId) })

  if (isLoading) {
    return <div className={"flex-container"}>Загрузка...</div>
  }

  if (!userPosts) {
    return <div className={"flex-container"}>Нет постов для пользователя ID: {userId}</div>
  }

  return (
    <div className={"flex-container-column " + s.userPosts}>
      {userPosts.map((post) => (
        <PostCard key={post.id} post={post}>
          <PostCard.PostTitle />
          <PostCard.PostBody />
          <PostCard.PostDetailsLink />
        </PostCard>
      ))}
    </div>
  )
}
