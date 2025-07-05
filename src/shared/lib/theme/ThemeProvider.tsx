import { createContext, type ReactNode, useEffect, useState } from "react"

export type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
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

  return <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>{children}</ThemeContext.Provider>
}
