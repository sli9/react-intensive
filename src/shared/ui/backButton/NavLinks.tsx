import { NavLink, useNavigate } from "react-router"
import s from "./NavLinks.module.css"

export type NavigationButtonProps = {
  goBack?: boolean
  to?: string
  label?: string
  className?: string
}

export const NavigationLink = ({ goBack = false, to = "/", label, className }: NavigationButtonProps) => {
  const navigate = useNavigate()

  if (goBack) {
    return (
      <a onClick={() => navigate(-1)} className={`link ${className}`}>
        <span>&#x21d0;</span> Назад
      </a>
    )
  }

  return (
    <NavLink to={to} end className={({ isActive }) => [s.navLink, isActive ? s.active : ""].join(" ")}>
      {label}
    </NavLink>
  )
}
