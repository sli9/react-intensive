import s from "./TodoCard.module.css"
import { changeTodoPriority, changeTodoStatus, TodoPriority, type TTodo } from "@/entities/todos"
import { SelectTodoPriority } from "@/features/selectTodoPriority"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "@/app/providers/store/store.ts"
import { CheckboxTodo } from "@/features/selectTodoPriority/ui/todoCheckbox/CheckboxTodo.tsx"

type TodoCardProps = {
  todo: TTodo
}

export const TodoCard = ({ todo }: TodoCardProps) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleChangePriority = (id: number, priority: TodoPriority) => {
    dispatch(changeTodoPriority({ id, priority }))
  }

  const handleTodoStatus = (id: number) => {
    dispatch(changeTodoStatus({ id, status: !todo.completed }))
  }

  return (
    <div className={`${s.todoCard} ${todo.completed ? s.todoCompleted : ""}`}>
      <CheckboxTodo todo={todo} toggleTodo={handleTodoStatus} />
      <div className={s.todoContent}>
        <h3 className={s.todoTitle}>{todo.title}</h3>
        <SelectTodoPriority todo={todo} changePriority={handleChangePriority} />
      </div>
    </div>
  )
}
