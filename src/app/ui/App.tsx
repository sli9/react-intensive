import { RouterProvider } from "react-router"
import { router } from "@/app/providers/router.tsx"
import { ThemeProvider } from "@/shared/lib/theme"
import { StoreProvider } from "@/app/providers/storeProvider/StoreProvider.tsx"

function App() {
  return (
    <ThemeProvider>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </ThemeProvider>
  )
}

export default App
