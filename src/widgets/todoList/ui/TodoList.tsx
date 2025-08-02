import s from "./TodoList.module.css"
import { selectAllTodos, TodoCard, useGetTodosQuery } from "@/entities/todos"
import { useSelector } from "react-redux"

type TodoListProps = {
  userId: number
}

export const TodoList = ({ userId }: TodoListProps) => {
  const { isFetching, isError, error } = useGetTodosQuery({ userId })
  const todos = useSelector(selectAllTodos)

  if (isFetching) {
    return null
  }

  if (isError) {
    console.error(error)
    return <div>Что-то пошло не так</div>
  }

  if (!todos) {
    return <div className={"flex-container"}>Нет задач для пользователя ID: {userId}</div>
  }

  return (
    <div className={s.container}>
      <div className={s.todosList}>
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}
