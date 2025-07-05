import s from "./ThemeSwitcher.module.css"
import { useTheme } from "@/shared/lib/theme"
import { MoonIcon } from "@/shared/icons"
import { SunIcon } from "@/shared/icons"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button onClick={toggleTheme} className={s.button}>
      {theme === "light" ? <MoonIcon className={s.icon} /> : <SunIcon className={`${s.icon} ${s.iconSun}`} />}
    </button>
  )
}
