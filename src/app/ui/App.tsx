import { RouterProvider } from "react-router"
import { router } from "@/app/providers/router.tsx"

function App() {
  return <RouterProvider router={router} />
}

export default App
