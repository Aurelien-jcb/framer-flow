import { Icons } from "@/app/libs/icons"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: Icons.helpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Icons.circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Icons.arrowUpCircle,
  },
  {
    value: "done",
    label: "Done",
    icon: Icons.checkCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: Icons.xCircle,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: Icons.arrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: Icons.arrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: Icons.arrowUpLeft,
  },
]
