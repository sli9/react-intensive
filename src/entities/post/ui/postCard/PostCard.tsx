import s from "./PostCard.module.css"
import { Link } from "react-router"
import { Paths } from "@/shared/config"
import { createContext, type ReactNode, useContext } from "react"
import type { Post } from "@/entities/post"
import { useSelector } from "react-redux"
import { selectUserById } from "@/entities/user"
import type { RootState } from "@/app/providers/store/store.ts"

const PostCardContext = createContext<Post | undefined>(undefined)
const usePostCardContext = () => {
  const context = useContext(PostCardContext)
  if (!context) {
    throw new Error("usePostCardContext must be used within a PostCardContextProvider")
  }
  return context
}

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

const UserName = ({ userId }: { userId: number }) => {
  const user = useSelector((state: RootState) => selectUserById(state, userId))

  return (
    <Link to={Paths.UserPosts.getLink(userId)}>
      User {user.userName} ID: {user.userId}
    </Link>
  )
}

const PostTitle = () => {
  const { title } = usePostCardContext()
  return (
    <h3
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {title}
    </h3>
  )
}

const PostBody = ({ lineClamp }: { lineClamp?: number }) => {
  const { body } = usePostCardContext()
  return (
    <p className={s.body} style={{ WebkitLineClamp: lineClamp }}>
      {body}
    </p>
  )
}

const PostDetailsLink = ({ text = "Read more" }: { text?: string }) => {
  const { id } = usePostCardContext()
  return (
    <Link className={"link"} to={Paths.PostDetails.getLink(id)}>
      {text}
    </Link>
  )
}

PostCard.UserName = UserName
PostCard.PostTitle = PostTitle
PostCard.PostBody = PostBody
PostCard.PostDetailsLink = PostDetailsLink
