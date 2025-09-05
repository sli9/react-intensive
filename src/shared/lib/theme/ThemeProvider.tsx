import { type PropsWithChildren, useEffect, useState } from "react"
import { type Theme, ThemeContext as ThemeContext1 } from "./lib/ThemeContext.tsx"

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    return savedTheme || "light"
  })

  useEffect(() => {
    const root = document.documentElement

    root.classList.remove("light", "dark")
    root.classList.add(theme)

    localStorage.setItem("theme", theme)
  }, [theme])

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  return <ThemeContext1 value={{ theme, setTheme: handleSetTheme }}>{children}</ThemeContext1>
}
