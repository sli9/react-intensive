import { useLazyGetCommentsQuery } from "@/entities/comments/api/commentsApi.ts"
import { useState } from "react"
import s from "./CommentsList.module.css"
import { CommentCard } from "@/entities/comments"
import { ToggleCommentsButton } from "@/features/commentToggles"
import { ItemList } from "@/shared/ui/itemList"

type CommentListProps = {
  postId: number
}

export const CommentsList = ({ postId }: CommentListProps) => {
  const [toggle, setToggle] = useState(false)
  const [getComments, { data: comments, isFetching, isUninitialized, isError }] = useLazyGetCommentsQuery()

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
        disabled={isFetching}
        className={s.button}
      />
      {toggle && (
        <ItemList
          isLoading={isFetching}
          isError={isError}
          items={comments}
          renderItem={(comment) => <CommentCard comment={comment} />}
        />
      )}
    </>
  )
}
