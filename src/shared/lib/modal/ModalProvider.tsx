import { type ReactNode, useState } from "react"
import { ModalContext } from "./ModalContext.tsx"

type ModalProviderProps = {
  children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prevState) => !prevState)

  return <ModalContext value={{ isModalOpen: isOpen, toggle }}>{children}</ModalContext>
}
