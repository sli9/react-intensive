import { postsAdapter } from "./postsAdapter.ts"
import type { RootState } from "@/app/providers/store/store.ts"

const selectors = postsAdapter.getSelectors((state: RootState) => state.posts)

export const { selectAll: selectAllPosts, selectById: selectPostById } = selectors
