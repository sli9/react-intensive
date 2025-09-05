import s from "./Header.module.css"
import { Link } from "react-router"
import { Paths } from "@/shared/config"
import { ThemeSwitcher } from "@/features/themeSwitcher"

export const Header = () => {
  return (
    <header className={`flex-container ${s.wrapper}`}>
      <h1>
        <Link to={`${Paths.Main.pathname}`}>logo</Link>
      </h1>
      <div className={`flex-container ${s.buttonsWrapper}`}>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
