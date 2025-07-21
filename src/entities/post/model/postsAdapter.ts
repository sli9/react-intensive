import { createEntityAdapter } from "@reduxjs/toolkit"
import type { Post } from "@/widgets/todoList"

export const postsAdapter = createEntityAdapter<Post>({
  sortComparer: (a, b) => a.id - b.id,
})
