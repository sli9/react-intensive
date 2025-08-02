import { type ChangeEvent, type FormEvent, useState } from "react"
import { type Comment, useAddCommentMutation } from "@/entities/comments"

type AddCommentProps = {
  postId: number
}

export const AddComment = ({ postId }: AddCommentProps) => {
  const [comment, setComment] = useState("")
  const [addComment, { isLoading }] = useAddCommentMutation()

  const handleAddCommit = (e: FormEvent) => {
    e.preventDefault()
    const newComment: Comment = {
      postId,
      body: comment,
      email: "fake@mail.ru",
      id: Date.now(),
      name: "fake",
    }
    setComment("")
    addComment(newComment)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value)
  }
  return (
    <form onSubmit={handleAddCommit}>
      <label htmlFor={"add-comment"}>Add Comment</label>
      <input
        id={"add-comment"}
        value={comment}
        onChange={handleInputChange}
        style={{ marginTop: "5px", marginLeft: "5px", backgroundColor: "white" }}
        type={"text"}
      />
      <button type={"submit"} style={{ marginLeft: "5px" }} disabled={isLoading}>
        Add
      </button>
    </form>
  )
}
