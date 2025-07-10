import { mockComments } from "@/shared/mocks/mockComments.ts"
import s from "./CommentList.module.css"

type CommentListProps = {
  postId: number
}

export const CommentList = ({ postId }: CommentListProps) => {
  const comments = mockComments[postId]

  return (
    <>
      {comments ? (
        comments.map((comment) => (
          <div key={comment.id} className={s.comment}>
            <p>Author: {comment.author}</p>
            <p>- {comment.text}</p>
          </div>
        ))
      ) : (
        <div>No comments</div>
      )}
    </>
  )
}
