import s from "./PhotosList.module.css"
import { mockAlbums } from "@/shared/mocks/mockAlbums.ts"
import { PhotoModal } from "@/features/photoModal/ui/PhotoModal.tsx"
import { useState } from "react"
import type { Photo } from "@/widgets/photosList"

type PhotosListProps = {
  albumId: number
}

export const PhotosList = ({ albumId }: PhotosListProps) => {
  const [photo, setPhoto] = useState<Photo>({} as Photo)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModalContext = () => setIsModalOpen((prevState) => !prevState)
  const openModal = (photo: Photo) => {
    setPhoto(photo)
    openModalContext()
  }

  const photos = mockAlbums.find((album) => album.id === Number(albumId))?.photos || []

  if (photos.length === 0) {
    return <div className={"flex-container"}>Нет фотографий в альбоме ID: {albumId}</div>
  }

  return (
    <div className={s.container}>
      <div className={s.photosGrid}>
        {photos.map((photo) => (
          <div key={photo.id} className={s.photoCard}>
            <div className={s.photoContainer} onClick={() => openModal(photo)}>
              <img src={photo.url} alt={photo.title} className={s.photoImage} loading="lazy" />
            </div>
            <div className={s.photoInfo}>
              <h3 className={s.photoTitle}>{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <PhotoModal photo={photo} context={{ toggle: openModalContext, isModalOpen }} />
    </div>
  )
}
