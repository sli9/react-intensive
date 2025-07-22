import { RouterProvider } from "react-router"
import { router } from "@/app/providers/router.tsx"
import { GlobalErrorBoundary } from "@/shared/ui/errorBoundary/GlobalErrorBoundary.tsx"

function App() {
  return (
    <GlobalErrorBoundary>
      <RouterProvider router={router} />
    </GlobalErrorBoundary>
  )
}

export default App
