import type { Post } from "@/widgets/postList"

export const filterByLength = (posts: Post[] | null, length: number) => {
  return posts?.filter((post) => post.title.length >= length)
}
