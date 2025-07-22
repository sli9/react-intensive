import { createContext, type ReactNode } from "react"

export type ModalContextType = {
  toggle: () => void
  isModalOpen: boolean
}

export const modalContext = createContext<ModalContextType | undefined>(undefined)

type ModalProviderProps = {
  children: ReactNode
  context: ModalContextType
}

export const ModalProvider = ({ children, context }: ModalProviderProps) => {
  return <modalContext.Provider value={context}>{children}</modalContext.Provider>
}
