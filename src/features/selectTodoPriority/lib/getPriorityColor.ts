import { TodoPriority } from "@/entities/todos"

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case TodoPriority.High:
      return "#ef4444"
    case TodoPriority.Medium:
      return "#f59e0b"
    case TodoPriority.Low:
      return "#10b981"
    default:
      return ""
  }
}