import type { Album } from "@/entities/albums"
import { Paths } from "@/shared/config"
import { Link } from "react-router"
import s from "./AlbumCard.module.css"

type CommentCardProps = {
  album: Album
}
export const AlbumCard = ({ album }: CommentCardProps) => {
  return (
    <Link key={album.id} to={Paths.AlbumPhotos.getLink(album.id)} className={s.albumCard}>
      <div className={s.albumThumbnail}>
        <img src={`https://picsum.photos/800/600?random=${album.id}`} alt={album.title} className={s.albumImage} />
        <div className={s.albumOverlay}>
          <span>View Photos</span>
        </div>
      </div>
      <div className={s.albumInfo}>
        <h3 className={s.albumTitle}>{album.title}</h3>
      </div>
    </Link>
  )
}
