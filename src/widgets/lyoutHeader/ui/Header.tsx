import s from "./Header.module.css"
import { ThemeSwitcher } from "@/features/themeSwitcher"
import { AboutModal } from "@/features/aboutModal"
import { Button } from "@/shared/ui/button"
import { useState } from "react"

export const Header = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)

  const handleOpenAboutModal = () => {
    setIsAboutModalOpen(true)
  }

  const handleCloseAboutModal = () => {
    setIsAboutModalOpen(false)
  }

  return (
    <header className={`flex-container ${s.wrapper}`}>
      <h1>logo</h1>
      <div className={`flex-container ${s.buttonsWrapper}`}>
        <Button fitContent onClick={handleOpenAboutModal}>
          About
        </Button>
        <ThemeSwitcher />
      </div>
      <AboutModal isOpen={isAboutModalOpen} onClose={handleCloseAboutModal} />
    </header>
  )
}
