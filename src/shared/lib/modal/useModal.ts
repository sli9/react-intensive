import { useContext } from "react"
import { modalContext } from "./ModalProvider.tsx"

export const useModal = () => {
  const context = useContext(modalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
