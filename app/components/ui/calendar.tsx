/* eslint-disable react/display-name */
"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"

import { buttonVariants } from "@/app/components/ui/button"
import { Icons } from "@/app/libs/icons"
import { cn } from "@/app/libs/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={props.locale}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months:
          "flex capitalize flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-primary rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected:
          "bg-primary text-secondary hover:bg-primary hover:text-secondary focus:bg-primary focus:text-secondary",
        day_today: "bg-accent text-secondary",
        day_outside: "text-primary opacity-50",
        day_disabled: "text-primary opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-secondary",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <Icons.chevronLeft className="h-4 w-4" />,
        IconRight: () => <Icons.chevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
