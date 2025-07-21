import { useParams } from "react-router"
import { PhotosList } from "@/widgets/photosList"

export const AlbumPhotosPage = () => {
  const { id: albumId } = useParams()

  return <PhotosList albumId={Number(albumId)} />
}
