import type { Comment } from "@/entities/comments"
import s from "./CommentCard.module.css"

type CommentCardProps = {
  comment: Comment
}
export const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div key={comment.id} className={s.comment}>
      <p>
        <strong>Author</strong>: {comment.name}
      </p>
      <p>- {comment.body}</p>
    </div>
  )
}
