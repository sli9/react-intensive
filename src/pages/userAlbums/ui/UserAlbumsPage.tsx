import { useParams } from "react-router"
import { AlbumsList } from "@/widgets/albumsList"

export const UserAlbumsPage = () => {
  const { id: userId } = useParams()

  return <AlbumsList userId={Number(userId)} />
}
