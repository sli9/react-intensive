import s from "./Header.module.css"
import { AboutModal } from "@/features/aboutModal"

export const Header = () => {
  return (
    <header className={`flex-container ${s.wrapper}`}>
      <h1>logo</h1>
      <div className={`flex-container ${s.buttonsWrapper}`}>
        <AboutModal />
      </div>
    </header>
  )
}
