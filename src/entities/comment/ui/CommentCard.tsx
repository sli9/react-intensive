import type { Comment } from "@/widgets/commentList"
import s from "./CommentCard.module.css"

type CommentProps = {
  comment: Comment
}

export const CommentCard = ({ comment }: CommentProps) => {
  return (
    <div className={s.comment}>
      <p>Author: {comment.author}</p>
      <p>- {comment.text}</p>
    </div>
  )
}
