import { NavigationLink } from "@/shared/ui/backButton/NavLinks.tsx"
import { Paths } from "@/shared/config"
import s from "./UserTabs.module.css"

type UserTabsProps = {
  userId: number
}

export const UserTabs = ({ userId }: UserTabsProps) => {
  const tabs = [
    { label: Paths.UserPosts.text, to: Paths.UserPosts.getLink(userId) },
    { label: Paths.UserAlbums.text, to: Paths.UserAlbums.getLink(userId) },
    { label: Paths.UserTodos.text, to: Paths.UserTodos.getLink(userId) },
  ]
  return (
    <nav>
      <ul className={`flex-container ${s.userTabs}`}>
        {tabs.map((tab, index) => (
          // табы не меняются, не удаляются(кажется уместно использовать index)
          <li key={index}>
            <NavigationLink to={tab.to} label={tab.label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
