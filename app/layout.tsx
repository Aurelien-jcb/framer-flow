"use client"

import "@/styles/globals.css"
import { Fragment, useEffect, useState } from "react"
import { Transition } from "@headlessui/react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import SideBar from "@/components/layout/side-bar"
import { TopBar } from "@/components/layout/top-bar"
import { TailwindIndicator } from "@/components/shared/tailwind-indicator"
import { ThemeProvider } from "@/components/shared/theme-provider"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [showNav, setShowNav] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false)
      setIsMobile(true)
    } else {
      setShowNav(true)
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      addEventListener("resize", handleResize)
    }

    return () => {
      removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <>
      <html lang="fr" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <TopBar showNav={showNav} setShowNav={setShowNav} />
              <Transition
                as={Fragment}
                show={showNav}
                enter="transform transition duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform duration-300 transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <SideBar
                  items={siteConfig.mainNav}
                  isMobile={isMobile}
                  showNav={showNav}
                  onClose={() => setShowNav(false)}
                />
              </Transition>
              <main
                className={`pt-8 transition-all duration-300 ${
                  showNav && !isMobile ? "pl-56" : ""
                }`}
              >
                <div className="px-4 md:px-16">{children}</div>
              </main>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
