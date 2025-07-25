import { usePostCardContext } from "@/entities/post/lib/UsePostCardContext.tsx"

export const PostTitle = () => {
  const { title } = usePostCardContext()
  return <h3>{title}</h3>
}
