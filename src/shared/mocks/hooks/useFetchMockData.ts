import { useEffect, useState } from "react"

export const useFetchMockData = <T>(mockData: T) => {
  const [data, setData] = useState<T | null>(null)
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
