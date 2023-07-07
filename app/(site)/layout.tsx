"use client"

import "@/app/globals.css"
import { Fragment, useEffect, useState } from "react"
import { Transition } from "@headlessui/react"

import SideBar from "@/app/components/layout/side-bar"
import { TopBar } from "@/app/components/layout/top-bar"
import { siteConfig } from "@/app/config/site"

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
    </>
  )
}
