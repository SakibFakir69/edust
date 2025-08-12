import { PERMISSIONS, Permissions } from "@edust/types"
import {
  BadgeHelp,
  BotMessageSquare,
  Building2,
  House,
  LucideIcon,
  MessageSquareX,
  Newspaper,
  School,
  UsersRound,
} from "lucide-react"

export type NavItem = {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  permission?: Permissions
  items?: {
    title: string
    url: string
  }[]
}

// This is sample data.
export const navMainData: NavItem[] = [
  {
    title: "Home",
    url: "/",
    icon: House,
  },
  {
    title: "  Users management",
    url: "/users",
    icon: UsersRound,
    permission: PERMISSIONS.ADM_PREFIX,
  },
  {
    title: "Organizations",
    url: "/orgs",
    icon: Building2,
    permission: PERMISSIONS.ADM_PREFIX,
  },
  {
    title: "Institutes",
    url: "/institutes",
    icon: School,
    permission: PERMISSIONS.ADM_PREFIX,
  },
  {
    title: "Feedback",
    url: "/feedback",
    icon: MessageSquareX,
    permission: PERMISSIONS.ADM_PREFIX,
  },
  {
    title: "Help Center",
    url: "/help-center",
    icon: BadgeHelp,
    permission: PERMISSIONS.ADM_PREFIX,
  },
  {
    title: "Support",
    url: "/support",
    icon: BotMessageSquare,
    permission: PERMISSIONS.ADM_PREFIX,
  },
  {
    title: "News",
    url: "/news",
    icon: Newspaper,
    permission: PERMISSIONS.ADM_NEWS_FULL_ACCESS,
    items: [
      {
        title: "All News",
        url: "/news/list",
      },
      {
        title: "Categories",
        url: "/news/categories",
      },
      {
        title: "Sources",
        url: "/news/sources",
      },
      {
        title: "Tags",
        url: "/news/tags",
      },
    ],
  },
]
