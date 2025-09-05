import s from "./AlbumsList.module.css"
import { AlbumCard, useGetAlbumsQuery } from "@/entities/albums"
import { ItemList } from "@/shared/ui/itemList"

type AlbumsListProps = {
  userId: number
}

export const AlbumsList = ({ userId }: AlbumsListProps) => {
  const { data: albums, isFetching, isError } = useGetAlbumsQuery({ userId })

  return (
    <ItemList
      className={s.albumsGrid}
      items={albums}
      isLoading={isFetching}
      isError={isError}
      renderItem={(album) => <AlbumCard album={album} />}
    />
  )
}
