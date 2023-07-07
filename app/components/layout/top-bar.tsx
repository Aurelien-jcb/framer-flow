import { UserNav } from "@/app/components/layout/user-nav"
import { ThemeToggle } from "@/app/components/shared/theme-toggle"
import { NotificationButton } from "@/app/components/top-bar/notifications-button"
import { buttonVariants } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Icons } from "@/app/libs/icons"

export function TopBar({
  showNav,
  setShowNav,
}: {
  showNav?: boolean
  setShowNav: (show: boolean) => void
}) {
  return (
    <header
      className={`sticky top-0 z-10 flex h-16 w-full items-center justify-between space-x-1  bg-background sm:justify-between sm:space-x-0 ${
        showNav ? "pl-60" : ""
      }`}
    >
      <div className="cursor-pointer">
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
          onClick={() => setShowNav(!showNav)}
        >
          <Icons.burgerIcon className="h-8 w-8" />
        </div>
      </div>
      <div className="flex h-16  w-5/12 items-center justify-between">
        {/* <Input type="search" placeholder="Rechercher..." /> */}
      </div>
      <div className="flex items-center pr-4">
        <nav className="flex items-center space-x-1">
          <NotificationButton />
          <UserNav />
          {/* <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
            </div>
          </Link> */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
