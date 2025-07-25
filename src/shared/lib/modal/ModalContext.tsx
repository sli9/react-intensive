import { createContext } from "react"

type ModalContext = {
  toggle: () => void
  isModalOpen: boolean
}

export const ModalContext = createContext<ModalContext | undefined>(undefined)
