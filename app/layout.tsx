"use client";

import { fontSans } from "@/lib/fonts";
import SessionProvider from "@/lib/providers/auth-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/shared/tailwind-indicator";



import "@/styles/globals.css";
import { useSession } from "next-auth/react";


interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  // const useSession
  //  if (status === 'loading') {
  //   // Afficher un indicateur de chargement ou un écran de chargement si nécessaire
  //   return <div>Loading...</div>
  // }

  // const isUserLoggedIn = session?.user
  return (
    <>
      <html lang="fr" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <TailwindIndicator />
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
    </>
  )
}