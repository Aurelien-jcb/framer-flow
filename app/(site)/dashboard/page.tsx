import { Metadata } from "next"

import { CalendarDateRangePicker } from "@/app/components/dashboard/date-range-picker"
import { Overview } from "@/app/components/dashboard/overview"
import { RecentSales } from "@/app/components/dashboard/recent-sales"
import { Button } from "@/app/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import { Tabs, TabsContent } from "@/app/components/ui/tabs"
import { Icons } from "@/app/libs/icons"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
}

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button size="sm">
                <Icons.download className="mr-2 h-4 w-4" />
                Télécharger un rapport
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between  space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Chiffre d&apos;affaire total
                    </CardTitle>
                    <Icons.euro className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45,231.89€</div>
                    <p className="text-xs text-primary-foreground">
                      +20.1% par rapport au mois précédent
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Commandes en cours
                    </CardTitle>
                    <Icons.order />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">38</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Ventes
                    </CardTitle>
                    <Icons.creditCard className="h-4 w-4 text-primary-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-primary-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <Icons.activity className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs">+201 since last hour</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle className="text-primary">
                      Vue d&apos;ensemble
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2 ">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle className="text-primary">
                      Commandes récentes
                    </CardTitle>
                    <CardDescription className="font-semibold text-primary-foreground">
                      Vous avez 254 ventes ce mois-ci
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between  space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Chiffre d&apos;affaire total
                    </CardTitle>
                    <Icons.euro className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45,231.89€</div>
                    <p className="text-xs text-primary-foreground">
                      +20.1% par rapport au mois précédent
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Commandes en cours
                    </CardTitle>
                    <Icons.order />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">38</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Ventes
                    </CardTitle>
                    <Icons.creditCard className="h-4 w-4 text-primary-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-primary-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <Icons.activity className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs">+201 since last hour</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle className="text-primary">
                      Vue d&apos;ensemble
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2 ">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle className="text-primary">
                      Commandes récentes
                    </CardTitle>
                    <CardDescription className="font-semibold text-primary-foreground">
                      Vous avez 254 ventes ce mois-ci
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
