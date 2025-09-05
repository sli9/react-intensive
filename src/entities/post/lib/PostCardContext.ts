import { createContext } from "react"
import type { Post } from "@/entities/post"

export const PostCardContext = createContext<Post | undefined>(undefined)
