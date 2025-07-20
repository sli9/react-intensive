import s from "./AlbumsList.module.css"
import { AlbumCard, useGetAlbumsQuery } from "@/entities/albums"

type AlbumsListProps = {
  userId: number
}

export const AlbumsList = ({ userId }: AlbumsListProps) => {
  const { data: albums, isLoading } = useGetAlbumsQuery({ userId })

  if (isLoading) {
    return null
  }

  if (!albums) {
    return <div className={"flex-container"}>Нет альбомов у пользователя ID: {userId}</div>
  }

  return (
    <div className={s.albumsGrid}>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  )
}
