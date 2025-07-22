import { createContext } from "react"
import type { Post } from "@/widgets/todoList"

export const PostCardContext = createContext<Post | undefined>(undefined)
