import s from "./PhotosList.module.css"
import { useGetAlbumPhotosQuery } from "@/entities/albums"
import { PhotoCard } from "@/entities/photo"
import { ItemList } from "@/shared/ui/itemList"

type PhotosListProps = {
  albumId: number
}

export const PhotosList = ({ albumId }: PhotosListProps) => {
  const { data, isFetching, isError } = useGetAlbumPhotosQuery({ albumId })

  return (
    <div className={s.container}>
      <ItemList
        className={s.photosGrid}
        isLoading={isFetching}
        isError={isError}
        items={data}
        renderItem={(photo) => <PhotoCard photo={photo} />}
      />
    </div>
  )
}
