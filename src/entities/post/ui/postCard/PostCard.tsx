import s from "./PostCard.module.css"
import type { Post } from "@/widgets/todoList"
import { type ReactNode } from "react"
import { PostCardContext } from "../../lib/PostCardContext.ts"
import { UserName } from "@/entities/post/ui/postCard/postCardSubcomponents/UserName.tsx"
import { PostTitle } from "@/entities/post/ui/postCard/postCardSubcomponents/PostTitle.tsx"
import { PostBody } from "@/entities/post/ui/postCard/postCardSubcomponents/PostBody.tsx"
import { PostDetailsLink } from "@/entities/post/ui/postCard/postCardSubcomponents/PostDetailsLink.tsx"

type PostCardProps = {
  post: Post
  children?: ReactNode
}

export const PostCard = ({ post, children }: PostCardProps) => {
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
