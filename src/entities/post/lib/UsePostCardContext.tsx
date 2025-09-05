import { useContext } from "react"
import { PostCardContext } from "@/entities/post/lib/PostCardContext.ts"

export const usePostCardContext = () => {
  const context = useContext(PostCardContext)
  if (!context) {
    throw new Error("usePostCardContext must be used within a PostCardContextProvider")
  }
  return context
}
