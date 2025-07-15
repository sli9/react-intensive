import s from "./TodoList.module.css"
import { mockTodos } from "@/shared/mocks"

type TodoListProps = {
  userId: number
}

export const TodoList = ({ userId }: TodoListProps) => {
  const filteredTodos = mockTodos.filter((todo) => todo.userId === userId)

  if (filteredTodos.length === 0) {
    return <div className={"flex-container"}>Нет задач для пользователя ID: {userId}</div>
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "#ef4444"
      case "medium":
        return "#f59e0b"
      case "low":
        return "#10b981"
      default:
        return "#9ca3af"
    }
  }

  return (
    <div className={s.container}>
      <div className={s.todosList}>
        {filteredTodos.map((todo) => (
          <div key={todo.id} className={`${s.todoCard} ${todo.completed ? s.todoCompleted : ""}`}>
            <div className={s.todoContent}>
              <h3 className={s.todoTitle}>{todo.title}</h3>
              <div className={s.todoMeta}>
                <span className={s.todoPriority} style={{ color: getPriorityColor(todo.priority) }}>
                  {todo.priority.toUpperCase()} PRIORITY
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
