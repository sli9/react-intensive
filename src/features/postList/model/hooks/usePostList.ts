import { useEffect, useState } from "react"
import type { Post } from "@/widgets/postList"

export const usePosts = (mockData: Post[]) => {
  const [data, setData] = useState<Post[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setData(mockData)
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timerId)
  }, [mockData])

  return { isLoading, data }
}
