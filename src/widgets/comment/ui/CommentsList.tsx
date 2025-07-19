import { useLazyGetCommentsQuery } from "@/entities/comments/api/commentsApi.ts"
import { useState } from "react"
import s from "./CommentsList.module.css"
import { CommentCard } from "@/entities/comments"
import { ToggleCommentsButton } from "@/features/commentToggles"

type CommentListProps = {
  postId: number
}

export const CommentsList = ({ postId }: CommentListProps) => {
  const [toggle, setToggle] = useState(false)
  const [getComments, { data: comments, isLoading, isUninitialized }] = useLazyGetCommentsQuery()

  const handleGetComments = () => {
    if (isUninitialized) {
      getComments({ postId })
    }
    setToggle(!toggle)
  }

  return (
    <>
      <ToggleCommentsButton
        onClick={handleGetComments}
        commentsAmount={comments?.length}
        disabled={isLoading}
        className={s.button}
      />
      {toggle && comments?.map((comment) => <CommentCard comment={comment} key={comment.id} />)}
    </>
  )
}
