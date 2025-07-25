import { usePostCardContext } from "@/entities/post/lib/UsePostCardContext.tsx"

export const PostBody = () => {
  const { body } = usePostCardContext()
  return <p>{body}</p>
}
