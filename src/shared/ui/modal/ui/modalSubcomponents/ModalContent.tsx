import { type MouseEvent, type ReactNode, useEffect } from "react"
import { useModal } from "@/shared/lib/modal"
import { createPortal } from "react-dom"
import s from "@/shared/ui/modal/ui/Modal.module.css"

type ModalContentProps = {
  children: ReactNode
}
export const ModalContent = ({ children }: ModalContentProps) => {
  const { toggle, isModalOpen } = useModal()

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggle()
      }
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen, toggle])

  if (!isModalOpen) {
    return null
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      toggle()
    }
  }

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.content}>{children}</div>
    </div>,
    document.body
  )
}
