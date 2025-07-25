import s from "./MainLayout.module.css"
import { Header } from "@/widgets/lyoutHeader"
import { Footer } from "@/widgets/lyoutFooter"
import { Outlet } from "react-router"

export const MainLayout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
