import type { TTodo } from "@/entities/todos"
import s from "./CheckboxTodo.module.css"
import { CheckSquareIcon, SquareIcon } from "@/shared/icons"

type CheckboxTodoProps = {
  todo: TTodo
  toggleTodo: (id: number) => void
}

export const CheckboxTodo = ({ todo, toggleTodo }: CheckboxTodoProps) => {
  const handleChange = () => {
    toggleTodo(todo.id)
  }

  return (
    <div className={s.todoCheckboxWrapper}>
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onChange={handleChange}
        className={s.todoCheckbox}
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={`${s.todoCheckboxLabel} ${todo.completed ? s.checkboxCompleted : ""}`}
      >
        {todo.completed ? <CheckSquareIcon className={s.checkboxIcon} /> : <SquareIcon className={s.checkboxIcon} />}
      </label>
    </div>
  )
}
