import type { ComponentPropsWithRef, ElementType, ReactElement, ReactNode } from "react"

type ButtonProps<T extends ElementType> = {
  children?: ReactNode
  className?: string
  as?: T
} & Omit<ComponentPropsWithRef<T>, "as">

export function Button<T extends ElementType>({ className, as, children, ...rest }: ButtonProps<T>): ReactElement {
  const Component = as || "button"

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  )
}
