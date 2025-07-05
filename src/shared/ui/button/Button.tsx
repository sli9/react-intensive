import type { ComponentPropsWithRef, ElementType, ReactElement, ReactNode } from "react"
import s from "./Button.module.css"

type ButtonProps<T extends ElementType> = {
  children?: ReactNode
  className?: string
  as?: T
  variant?: "rounded" | "square"
  size?: "sm" | "md" | "lg"
} & Omit<ComponentPropsWithRef<T>, "as">

export function Button<T extends ElementType>({
  className,
  as,
  children,
  variant = "square",
  size = "md",
  ...rest
}: ButtonProps<T>): ReactElement {
  const Component = as || "button"

  const classNames = ` 
  ${s.button}
  ${s[size]}
  ${s[variant]}
  ${className}`

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  )
}
