import { RouterProvider } from "react-router"
import { router } from "@/app/providers/router.tsx"
import { ThemeProvider } from "@/shared/lib/theme"
import { StoreProvider } from "@/app/providers/storeProvider/StoreProvider.tsx"
import { GlobalErrorBoundary } from "@/shared/ui/errorBoundary/GlobalErrorBoundary.tsx"

function App() {
  return (
    <ThemeProvider>
      <StoreProvider>
        <GlobalErrorBoundary>
          <RouterProvider router={router} />
        </GlobalErrorBoundary>
      </StoreProvider>
    </ThemeProvider>
  )
}

export default App
