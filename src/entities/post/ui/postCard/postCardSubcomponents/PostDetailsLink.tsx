import { usePostCardContext } from "@/entities/post/lib/UsePostCardContext.tsx"
import { Link } from "react-router"
import { Paths } from "@/shared/config"

export const PostDetailsLink = ({ text = "Read more" }: { text?: string }) => {
  const { id } = usePostCardContext()
  return (
    <Link className={"link"} to={Paths.PostDetails.getLink(id)}>
      {text}
    </Link>
  )
}
