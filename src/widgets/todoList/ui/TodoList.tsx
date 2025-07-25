import s from "./TodoList.module.css"
import { selectAllTodos, TodoCard, useGetTodosQuery } from "@/entities/todos"
import { useSelector } from "react-redux"
import { ItemList } from "@/shared/ui/itemList"

type TodoListProps = {
  userId: number
}

export const TodoList = ({ userId }: TodoListProps) => {
  const { isFetching, isError } = useGetTodosQuery({ userId })
  const todos = useSelector(selectAllTodos)

  return (
    <div className={s.container}>
      <ItemList
        isLoading={isFetching}
        isError={isError}
        className={s.todosList}
        items={todos}
        renderItem={(todo) => <TodoCard todo={todo} />}
      />
    </div>
  )
}
