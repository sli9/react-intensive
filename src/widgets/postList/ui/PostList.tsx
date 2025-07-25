import s from "./PostList.module.css"
import { PostCard, selectAllPosts, useGetPostsQuery } from "@/entities/post"
import { useGetUsersQuery } from "@/entities/user"
import { useSelector } from "react-redux"
import { ItemList } from "@/shared/ui/itemList"

export const PostList = () => {
  const { isFetching, isError } = useGetPostsQuery()
  useGetUsersQuery()

  const posts = useSelector(selectAllPosts)

  return (
    <ItemList
      className={s.list}
      isLoading={isFetching}
      isError={isError}
      items={posts}
      renderItem={(post) => (
        <PostCard post={post}>
          <PostCard.UserName />
          <PostCard.PostTitle />
          <PostCard.PostBody lineClamp={3} />
          <PostCard.PostDetailsLink />
        </PostCard>
      )}
    />
  )
}
