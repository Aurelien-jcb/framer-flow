"use client"

import { useTheme } from "next-themes"

export default function SettingsAppearance() {
  const { setTheme, theme } = useTheme()
  return (
    <div className="w-full space-y-6">
      <div>
        <h3 className="text-lg font-medium">Apparence</h3>
        <p className="text-sm text-primary">
         Personnaliser l&apos;apparence de l&apos;application. Basculer automatiquement entre le thème sombre et le thème clair
        </p>
      </div>
      <div className="xs:justify-center mt-1 flex flex-row justify-start">
        <div
          onClick={() => setTheme("light")}
          className={`mr-3 w-36 items-center rounded-md  p-1 ${theme === "light" ? "border-4 border-green" : "border-2 border-secondary"}`}
        >
          <div className="space-y-2 rounded-sm bg-beige p-2">
            <div className="space-y-2 rounded-md bg-cream p-2 shadow-sm">
              <div className="h-2 w-[80px] rounded-lg bg-green" />
              <div className="h-2 w-[100px] rounded-lg bg-green" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-cream p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-green" />
              <div className="h-2 w-[100px] rounded-lg bg-green" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-cream p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-green" />
              <div className="h-2 w-[100px] rounded-lg bg-green" />
            </div>
          </div>
          <span className="sr-only">Light mode</span>
        </div>
        <div
          onClick={() => setTheme("dark")}
          className={`mr-3 w-36 items-center rounded-md  p-1 ${theme === "dark" ? "border-4 border-green" : "border-2 border-green"}`}
        >
          <div className="space-y-2 rounded-sm bg-dark p-2">
            <div className="space-y-2 rounded-md bg-mineral p-2 shadow-sm">
              <div className="h-2 w-[80px] rounded-lg bg-beige/80" />
              <div className="h-2 w-[100px] rounded-lg bg-beige/80" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-mineral p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-beige/80" />
              <div className="h-2 w-[100px] rounded-lg bg-beige/80" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-mineral p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-beige/80" />
              <div className="h-2 w-[100px] rounded-lg bg-beige/80" />
            </div>
          </div>
          <span className="sr-only">Dark mode</span>
        </div>
      </div>
      {/* <AppearanceForm /> */}
    </div>
  )
}
