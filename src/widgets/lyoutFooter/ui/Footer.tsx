import s from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <p>&copy; All rights reserved.</p>
      </div>
    </footer>
  )
}
