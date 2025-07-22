import s from "@/shared/ui/modal/ui/Modal.module.css"
import type { ReactNode } from "react"

type ModalHeaderProps = {
  children: ReactNode
}
export const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <>
      <h2 className={s.title}>{children}</h2>
      <hr />
    </>
  )
}
