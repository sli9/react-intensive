import { type FC, type JSX } from "react"
import s from "./withLoading.module.css"

export const withLoading = <T extends object>(Component: FC<T>): FC<T & { isLoading: boolean }> => {
  return (props: T & { isLoading: boolean }): JSX.Element => {
    const { isLoading, ...rest } = props
    if (isLoading) {
      return <div className={s.loading}>Loading...</div>
    }

    return <Component {...(rest as T)} />
  }
}
