import { useParams } from "react-router"
import { TodoList } from "@/widgets/todoList"

export const UserTodosPage = () => {
  const { id: userId } = useParams()

  return <TodoList userId={Number(userId)} />
}
