"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { fr } from "date-fns/esm/locale"
import { DateRange } from "react-day-picker"

import { cn } from "@/app/libs/utils"
import { Button } from "@/app/components/ui/button"
import { Calendar } from "@/app/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover"

import { Icons } from "@/app/libs/icons"

export function CalendarDateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            size="sm"
            className={cn(
              "w-[260px] justify-start  text-left font-normal capitalize",
              !date && "text-muted-foreground"
            )}
          >
            <Icons.calendar className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd LLL y", { locale: fr })} -{" "}
                  {format(date.to, "dd LLL y", { locale: fr })}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Séléectionner une date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            locale={fr}
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
