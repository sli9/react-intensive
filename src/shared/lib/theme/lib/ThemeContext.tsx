import { createContext } from "react"

export type Theme = "light" | "dark"
type ThemeContext = {
  theme: Theme
  setTheme: (theme: Theme) => void
}
export const ThemeContext = createContext<ThemeContext | undefined>(undefined)
