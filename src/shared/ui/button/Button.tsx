import type { ComponentPropsWithRef, ElementType, PropsWithChildren, ReactElement } from "react"
import s from "./Button.module.css"

type ButtonProps<T extends ElementType> = {
  className?: string
  as?: T
  variant?: "rounded" | "square"
  size?: "sm" | "md" | "lg"
  fitContent?: boolean
} & Omit<ComponentPropsWithRef<T>, "as">

export function Button<T extends ElementType>({
  className,
  as,
  children,
  variant = "square",
  size = "md",
  fitContent = false,
  ...rest
}: PropsWithChildren<ButtonProps<T>>): ReactElement {
  const Component = as || "button"

  const classNames = ` 
  ${s.button}
  ${size && s[size]}
  ${variant && s[variant]}
  ${className}
  ${fitContent && s.fitContent}`

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  )
}
