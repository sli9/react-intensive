import type { Photo } from "@/widgets/photosList"

export type Album = {
  id: number
  userId: number
  title: string
  photos: Photo[]
}
