import { MainLayout } from "@/shared/layouts"
import { PostsPage } from "@/pages/post"
import { ThemeProvider } from "@/shared/lib/theme"

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <PostsPage />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
