"use client"

import { TailwindIndicator } from "@/app/components/shared/tailwind-indicator"
import { fontSans } from "@/app/libs/fonts"
import SessionProvider from "@/app/providers/auth-provider"

import "@/app/globals.css"
import { cn } from "@/app/libs/utils"
import { ThemeProvider } from "@/app/providers/theme-provider"
import ToasterProvider from "@/app/providers/toaster-provider"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToasterProvider />
            {children}
            <TailwindIndicator />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
