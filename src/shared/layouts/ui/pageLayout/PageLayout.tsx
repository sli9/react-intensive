import { Outlet, type UIMatch, useMatches, useParams } from "react-router"
import { UserTabs } from "@/widgets/userTabs"
import { NavigationLink } from "@/shared/ui/backButton"
import { PageTitle } from "@/shared/ui/pageTitle"

export const PageLayout = () => {
  const { id } = useParams()
  const matches = useMatches() as UIMatch<unknown, { title: string; withTabs: boolean }>[]

  const title = matches[matches.length - 1].handle?.title
  const withTabs = matches[matches.length - 1].handle?.withTabs

  return (
    <div className={"page-container"}>
      <div className={"flex-container"}>
        <PageTitle>
          {title} {id}
        </PageTitle>
        {withTabs && <UserTabs userId={Number(id)} />}
        <NavigationLink goBack />
      </div>
      <Outlet />
    </div>
  )
}
