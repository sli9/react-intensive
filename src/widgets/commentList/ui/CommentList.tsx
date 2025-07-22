import { mockComments } from "@/shared/mocks/mockComments.ts"
import { CommentCard } from "@/entities/comment"

type CommentListProps = {
  postId: number
}

export const CommentList = ({ postId }: CommentListProps) => {
  const comments = mockComments[postId]

  return (
    <>
      {comments ? (
        comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
      ) : (
        <div>No comments</div>
      )}
    </>
  )
}
