import s from "./ThemeSwitcher.module.css"
import { useTheme } from "@/shared/lib/theme"
import { MoonIcon } from "@/shared/icons"
import { SunIcon } from "@/shared/icons"
import { Button } from "@/shared/ui/button"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button onClick={toggleTheme} className={s.button}>
      {theme === "light" ? <MoonIcon className={s.icon} /> : <SunIcon className={`${s.icon} ${s.iconSun}`} />}
    </Button>
  )
}
