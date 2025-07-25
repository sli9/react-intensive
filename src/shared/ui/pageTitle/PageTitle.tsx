import type { PropsWithChildren } from "react"
import s from "./PageTitle.module.css"

export const PageTitle = ({ children }: PropsWithChildren) => {
  return <h1 className={s.title}>{children}</h1>
}
