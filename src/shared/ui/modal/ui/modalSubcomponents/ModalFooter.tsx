import type { ReactNode } from "react"
import s from "@/shared/ui/modal/ui/Modal.module.css"

type ModalFooterProps = {
  children: ReactNode
}
export const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <div className={s.footer}>
      <hr />
      {children}
    </div>
  )
}
