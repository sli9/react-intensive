import { PostCard } from "@/entities/post"
import type { Post } from "@/widgets/postList"
import { CommentList } from "@/widgets/commentList"
import s from "./PostCardWithComments.module.css"
import { CommentIcon } from "@/shared/icons/commentIcon/CommentIcon.tsx"
import { Button } from "@/shared/ui/button"
import { useState } from "react"

type PostCardWithCommentsProps = {
  post: Post
}

export const PostCardWithComments = ({ post }: PostCardWithCommentsProps) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className={"flex-container-column " + s.card}>
      <PostCard post={post} />
      <hr />
      <Button fitContent size={"sm"} className={s.button} onClick={handleClick}>
        <CommentIcon />
      </Button>
      {toggle && (
        <div className={s.commentsWrapper}>
          <CommentList postId={post.id} />
        </div>
      )}
    </div>
  )
}
