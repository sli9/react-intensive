import { cloneElement, type HTMLAttributes, type ReactElement } from "react"
import { useModal } from "@/shared/lib/modal"

type ModalToggleProps = {
  children: ReactElement<HTMLAttributes<HTMLElement>>
}

export const ModalToggle = ({ children }: ModalToggleProps) => {
  const { toggle } = useModal()
  return cloneElement(children, { onClick: toggle })
}
