import { usePostCardContext } from "@/entities/post/lib/UsePostCardContext.tsx"
import { Link } from "react-router"
import { Paths } from "@/shared/config"

export const UserName = () => {
  const { userId } = usePostCardContext()
  return <Link to={Paths.UserPosts.getLink(userId)}>User ID: {userId}</Link>
}
