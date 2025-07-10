import { createContext, type ReactNode, useState } from "react"

type ModalContextType = {
  toggle: () => void
  isModalOpen: boolean
}

export const modalContext = createContext<ModalContextType | undefined>(undefined)

type ModalProviderProps = {
  children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prevState) => !prevState)

  return <modalContext.Provider value={{ isModalOpen: isOpen, toggle }}>{children}</modalContext.Provider>
}
