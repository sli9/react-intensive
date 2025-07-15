import s from "./PhotosList.module.css"
import { mockAlbums } from "@/shared/mocks/mockAlbums.ts"

type PhotosListProps = {
  albumId: number
}

export const PhotosList = ({ albumId }: PhotosListProps) => {
  const photos = mockAlbums.find((album) => album.id === Number(albumId))?.photos || []

  if (photos.length === 0) {
    return <div className={"flex-container"}>Нет фотографий в альбоме ID: {albumId}</div>
  }

  return (
    <div className={s.container}>
      <div className={s.photosGrid}>
        {photos.map((photo) => (
          <div key={photo.id} className={s.photoCard}>
            <div className={s.photoContainer}>
              <img src={photo.url} alt={photo.title} className={s.photoImage} />
            </div>
            <div className={s.photoInfo}>
              <h3 className={s.photoTitle}>{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
