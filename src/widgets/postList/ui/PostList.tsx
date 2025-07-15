import s from "./PostList.module.css"
import { PostCard, selectAllPosts, useGetPostsQuery } from "@/entities/post"
import { useGetUsersQuery } from "@/entities/user"
import { useSelector } from "react-redux"

export const PostList = () => {
  const { isLoading, isError, error } = useGetPostsQuery()
  useGetUsersQuery()

  const posts = useSelector(selectAllPosts)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    console.error(error)
    return <div>Что-то пошло не так</div>
  }

  if (!posts) {
    return <div>Нет постов</div>
  }

  return (
    <div className={s.list}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post}>
          <PostCard.UserName />
          <PostCard.PostTitle />
          <PostCard.PostBody lineClamp={3} />
          <PostCard.PostDetailsLink />
        </PostCard>
      ))}
    </div>
  )
}
