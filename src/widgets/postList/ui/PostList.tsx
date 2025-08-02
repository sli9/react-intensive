import s from "./PostList.module.css"
import { type Post, PostCard, selectAllPosts, useDeletePostMutation, useGetPostsQuery } from "@/entities/post"
import { useGetUsersQuery } from "@/entities/user"
import { useSelector } from "react-redux"

export const PostList = () => {
  const { isFetching, isError, error } = useGetPostsQuery()
  useGetUsersQuery()
  const [deletePost] = useDeletePostMutation()

  const posts = useSelector(selectAllPosts)

  const handleRemovePost = (id: number) => {
    deletePost({ postId: id })
  }

  if (isFetching) {
    return null
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
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post}>
          <PostCard.UserName userId={post.userId} />
          <PostCard.PostTitle />
          <PostCard.PostBody lineClamp={3} />
          <PostCard.PostDetailsLink />
          <button style={{ marginLeft: "auto" }} onClick={() => handleRemovePost(post.id)}>
            Delete post
          </button>
        </PostCard>
      ))}
    </div>
  )
}
