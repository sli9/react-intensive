import type { Photo } from "@/entities/albums"
import s from "./PhotoCard.module.css"

type PhotoCardProps = {
  photo: Photo
}

export const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <div key={photo.id} className={s.photoCard}>
      <div className={s.photoContainer}>
        <img src={`https://picsum.photos/800/600?random=${photo.id}`} alt={photo.title} className={s.photoImage} />
      </div>
      <div className={s.photoInfo}>
        <h3 className={s.photoTitle}>{photo.title}</h3>
      </div>
    </div>
  )
}
