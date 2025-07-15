import s from "./PostList.module.css"
import { PostCard } from "@/entities/post"
import { mockPosts } from "@/shared/mocks"
import { usePosts } from "@/features/postList/model/hooks/usePostList.ts"

export const PostList = () => {
  const { data: posts, isLoading } = usePosts(mockPosts)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={s.list}>
      {posts?.slice(0, 10).map((post) => (
        <PostCard key={post.id} post={post}>
          <PostCard.UserName />
          <PostCard.PostTitle />
          <PostCard.PostBody />
          <PostCard.PostDetailsLink />
        </PostCard>
      ))}
    </div>
  )
}
