import { forwardRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/app/config/site"
import { NavItem } from "@/app/libs/types/nav"

import { Icons } from "@/app/libs/icons"

interface SideBarProps {
  showNav?: boolean
  items?: NavItem[]
  onClose?: () => void
  isMobile?: boolean
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(
  ({ isMobile, items, onClose }, ref) => {
    const pathName = usePathname()
    return (
      <div
        ref={ref}
        onClick={isMobile ? onClose : undefined}
        className="fixed z-40 h-full w-56 bg-background shadow-md"
      >
        <div className="mb-12 mt-6 flex justify-center">
          <Link passHref href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block font-bold text-primary">
              {siteConfig.name}
            </span>
          </Link>
        </div>
        <div className="flex flex-col">
          {items?.length ? (
            <nav>
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      passHref
                      key={index}
                      href={item.href}
                      className={`mx-5 mb-1 flex  cursor-pointer items-center rounded py-3 pl-6 text-center text-primary transition-colors ${
                        pathName == `${item.href}`
                          ? "bg-secondary text-primary"
                          : " opacity-90 hover:bg-secondary-foreground hover:text-primary"
                      }`}
                      onClick={isMobile ? onClose : undefined}
                    >
                      <div className="mr-2">{item.icon}</div>
                      <div>
                        <p>{item.title}</p>
                      </div>
                    </Link>
                  )
              )}
            </nav>
          ) : null}
          {/* <Separator/> */}
        </div>
      </div>
    )
  }
)

SideBar.displayName = "SideBar"

export default SideBar
