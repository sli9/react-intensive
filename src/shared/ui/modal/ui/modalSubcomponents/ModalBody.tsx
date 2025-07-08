import type { ReactNode } from "react"

type ModalBodyProps = {
  children: ReactNode
}
export const ModalBody = ({ children }: ModalBodyProps) => {
  return <>{children}</>
}
