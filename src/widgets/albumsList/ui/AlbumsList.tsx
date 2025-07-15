import s from "./AlbumsList.module.css"
import { Link } from "react-router"
import { Paths } from "@/shared/config"
import noImage from "/noData.png"
import { mockAlbums } from "@/shared/mocks"

type AlbumsListProps = {
  userId: number
}

export const AlbumsList = ({ userId }: AlbumsListProps) => {
  const albums = mockAlbums.filter((album) => album.userId === Number(userId))

  if (albums.length === 0) {
    return <div className={"flex-container"}>Нет альбомов для пользователя ID: {userId}</div>
  }

  return (
    <div className={s.albumsGrid}>
      {albums.map((album) => (
        <Link key={album.id} to={Paths.AlbumPhotos.getLink(album.id)} className={s.albumCard}>
          <div className={s.albumThumbnail}>
            {album.photos.length > 0 ? (
              <img src={album.photos[0].url} alt={album.title} className={s.albumImage} />
            ) : (
              <img src={noImage} alt={album.title} />
            )}
            <div className={s.albumOverlay}>
              <span>View Photos</span>
            </div>
          </div>
          <div className={s.albumInfo}>
            <h3 className={s.albumTitle}>{album.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
