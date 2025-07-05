import s from "./Header.module.css"
import { ThemeSwitcher } from "@/features/themeSwitcher"

export const Header = () => {
  return (
    <header className={`flex-container ${s.wrapper}`}>
      <h1>logo</h1>
      <ThemeSwitcher />
    </header>
  )
}
