import { TodoPriority, type TTodo } from "@/entities/todos"
import s from "./SelectTodoPriority.module.css"
import type { ChangeEvent } from "react"
import { getPriorityColor } from "../../lib/getPriorityColor.ts"

type SelectTodoPriorityProps = {
  todo: TTodo
  changePriority: (id: number, priority: TodoPriority) => void
}

export const SelectTodoPriority = ({ todo, changePriority }: SelectTodoPriorityProps) => {
  const handleChangePriority = (e: ChangeEvent<HTMLSelectElement>) => {
    changePriority(todo.id, e.target.value as TodoPriority)
  }

  return (
    <select
      name="priority"
      value={todo.priority}
      onChange={handleChangePriority}
      className={s.prioritySelect}
      style={{
        color: getPriorityColor(todo.priority),
        borderColor: getPriorityColor(todo.priority),
      }}
    >
      <option value="high">HIGH PRIORITY</option>
      <option value="medium">MEDIUM PRIORITY</option>
      <option value="low">LOW PRIORITY</option>
    </select>
  )
}
