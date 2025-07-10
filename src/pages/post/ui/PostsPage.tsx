import s from "./PostsPage.module.css"
import { PostListWithLoading } from "@/widgets/postList"
import { PageTitle } from "@/shared/ui/pageTitle"
import { mockPosts, useFetchMockData } from "@/shared/mocks"
import { filterByLength, PostLengthFilter } from "@/features/PostLengthFilter"
import { useCallback, useMemo, useState } from "react"

export const PostsPage = () => {
  const { isLoading, data } = useFetchMockData(mockPosts)
  const [minTitleLength, setMinTitleLength] = useState<number | null>(null)

  const handleSetMinTitleLength = useCallback((length: number | null) => {
    setMinTitleLength(length)
  }, [])

  const filteredPosts = useMemo(() => {
    if (!data) {
      return []
    }
    return minTitleLength ? filterByLength(data, minTitleLength) : data
  }, [minTitleLength, data])

  return (
    <div className={s.pageContainer}>
      <div className={"flex-container"}>
        <PageTitle>Home Page</PageTitle>
        <PostLengthFilter onChange={handleSetMinTitleLength} length={minTitleLength} />
      </div>
      <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
    </div>
  )
}
