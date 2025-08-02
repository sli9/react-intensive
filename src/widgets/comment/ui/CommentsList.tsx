import { useLazyGetCommentsQuery } from "@/entities/comments/api/commentsApi.ts"
import { useState } from "react"
import s from "./CommentsList.module.css"
import { CommentCard } from "@/entities/comments"
import { ToggleCommentsButton } from "@/features/commentToggles"
import { AddComment } from "@/features/addComment"

type CommentListProps = {
  postId: number
}

export const CommentsList = ({ postId }: CommentListProps) => {
  const [toggle, setToggle] = useState(false)

  const [getComments, { data: comments, isFetching, isUninitialized, isError, error }] = useLazyGetCommentsQuery()

  const handleGetComments = () => {
    if (isUninitialized) {
      getComments({ postId })
    }
    setToggle(!toggle)
  }

  if (isFetching) return null

  if (isError) {
    console.error(error)
    return <div>Что-то пошло не так</div>
  }

  return (
    <>
      <ToggleCommentsButton
        onClick={handleGetComments}
        commentsAmount={comments?.length}
        disabled={isFetching}
        className={s.button}
      />
      {toggle && (
        <>
          <AddComment postId={postId} />
          {comments?.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </>
      )}
    </>
  )
}
