import type { ReactNode } from "react"
import s from "./MainLayout.module.css"
import { Header } from "@/widgets/lyoutHeader"
import { Footer } from "@/widgets/lyoutFooter"

type Props = {
  children: ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  )
}
