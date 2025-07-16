import { type ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"
import s from "./Modal.module.css"
import { Button } from "@/shared/ui/button"

type ModalProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
  modalTitle: string
}

export const Modal = ({ onClose, open, modalTitle, children }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (open) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [open, onClose])

  return (
    open &&
    createPortal(
      <div className={s.overlay}>
        <div className={s.content}>
          <h2 className={s.title}>{modalTitle}</h2>
          <hr />
          {children}
          <Button className={s.closeIcon} variant="rounded" size="sm" onClick={onClose}>
            x
          </Button>
        </div>
      </div>,
      document.body
    )
  )
}
