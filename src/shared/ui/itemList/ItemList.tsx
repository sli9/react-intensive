import { Fragment, type ReactNode } from "react"

export type ItemListProps<T> = {
  items?: T[]
  renderItem: (item: T, index: number) => ReactNode
  isLoading?: boolean
  isError?: boolean
  className?: string
}

export function ItemList<T>({ items, renderItem, isError, isLoading, className }: ItemListProps<T>) {
  if (isLoading) {
    return null
  }

  if (isError) {
    return <div>Что-то пошло не так</div>
  }

  if (!items || items.length === 0) {
    return <div className={"flex-container"}>Нет элементов</div>
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <Fragment key={index}>{renderItem(item, index)}</Fragment>
      ))}
    </div>
  )
}
