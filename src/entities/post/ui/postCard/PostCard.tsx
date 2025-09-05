import s from "./PostCard.module.css"
import { PostTitle } from "./postCardSubcomponents/PostTitle.tsx"
import { UserName } from "./postCardSubcomponents/UserName.tsx"
import { PostBody } from "./postCardSubcomponents/PostBody.tsx"
import type { PropsWithChildren } from "react"
import { PostCardContext } from "@/entities/post/lib/PostCardContext.ts"
import { PostDetailsLink } from "./postCardSubcomponents/PostDetailsLink.tsx"
import type { Post } from "@/entities/post"

type PostCardProps = {
  post: Post
}

export const PostCard = ({ post, children }: PropsWithChildren<PostCardProps>) => {
  return (
    <PostCardContext value={post}>
      <div className={s.card}>{children}</div>
    </PostCardContext>
  )
}

PostCard.UserName = UserName
PostCard.PostTitle = PostTitle
PostCard.PostBody = PostBody
PostCard.PostDetailsLink = PostDetailsLink
