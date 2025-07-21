import s from "./PhotosList.module.css"
import { useGetAlbumPhotosQuery } from "@/entities/albums"
import { PhotoCard } from "@/entities/photo"

type PhotosListProps = {
  albumId: number
}

export const PhotosList = ({ albumId }: PhotosListProps) => {
  const { data, isFetching, isError, error } = useGetAlbumPhotosQuery({ albumId })

  if (isFetching) {
    return null
  }

  if (isError) {
    console.error(error)
    return <div>Что-то пошло не так</div>
  }

  if (!data) {
    return <div className={"flex-container"}>Нет фотографий в альбоме ID: {albumId}</div>
  }

  return (
    <div className={s.container}>
      <div className={s.photosGrid}>
        {data.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  )
}
