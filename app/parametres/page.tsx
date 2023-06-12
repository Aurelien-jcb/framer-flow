import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"
// import { SidebarNav } from "@/app/examples/forms/components/sidebar-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SettingsAppearance from "@/components/settings/appearance/appearance"

export const metadata: Metadata = {
  title: "Paramètres",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/examples/forms",
  },
  {
    title: "Account",
    href: "/examples/forms/account",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="p-0 lg:space-y-6 lg:p-10 lg:pb-16">
        <div className="space-y-02">
          <h2 className="text-2xl font-bold tracking-tight">Paramètres</h2>
          <p className="text-primary">
          Gérer les paramètres de votre compte et définir vos préférences.
          </p>
        </div>
        <div className="mt-6 flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            {/* <SidebarNav items={sidebarNavItems} /> */}
            <Tabs defaultValue="appearance" className="w-full">
              <TabsList>
                <TabsTrigger value="appearance">Apparence</TabsTrigger>
                <TabsTrigger value="profil">Profil</TabsTrigger>
              </TabsList>
              <TabsContent value="appearance">
                <SettingsAppearance />
              </TabsContent>
              <TabsContent value="profil">
                Onglet de modification de profil
              </TabsContent>
            </Tabs>
        
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
