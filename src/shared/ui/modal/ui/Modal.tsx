import { type ReactNode } from "react"
import { ModalProvider } from "@/shared/lib/modal"
import { ModalToggle } from "@/shared/ui/modal/ui/modalSubcomponents/ModalToggle.tsx"
import { ModalHeader } from "@/shared/ui/modal/ui/modalSubcomponents/ModalHeader.tsx"
import { ModalContent } from "@/shared/ui/modal/ui/modalSubcomponents/ModalContent.tsx"
import { ModalBody } from "@/shared/ui/modal/ui/modalSubcomponents/ModalBody.tsx"
import { ModalFooter } from "@/shared/ui/modal/ui/modalSubcomponents/ModalFooter.tsx"

type ModalProps = {
  children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
  return <ModalProvider>{children}</ModalProvider>
}

Modal.Toggle = ModalToggle
Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Body = ModalBody
Modal.Footer = ModalFooter
