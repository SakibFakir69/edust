"use client"

import { PERMISSIONS, Permissions } from "@/constant"
import {
  Earth,
  House,
  LayoutDashboard,
  LucideIcon,
  Settings2,
  SquareUserRound,
  UserRoundCog,
  Users,
} from "lucide-react"
import { FaWpforms } from "react-icons/fa"
import { IconType } from "react-icons/lib"
import { SiGoogleclassroom } from "react-icons/si"

export const nameMailData: {
  title: string
  url: string
  icon?: LucideIcon | IconType
  isActive?: boolean
  permission?: Permissions
  items?: {
    title: string
    url: string
    isActive?: boolean
    permission?: Permissions
  }[]
}[] = [
  {
    title: "Home",
    url: "/",
    icon: House,
  },
  {
    title: "Dashboard",
    url: "/orgs/:orgUsername",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    url: "/orgs/:orgUsername/students",
    icon: Users,
    permission: PERMISSIONS.ORG_STUDENT_FULL_ACCESS,
    items: [
      {
        title: "Add Student",
        url: "/orgs/:orgUsername/students/add",
      },
    ],
  },
  {
    title: "Admission",
    url: "/orgs/:orgUsername/admission",
    icon: SquareUserRound,
  },
  {
    title: "Class & Subject",
    url: "/orgs/:orgUsername/class-and-subject",
    icon: SiGoogleclassroom,
    items: [
      {
        title: "Classes",
        url: "/orgs/:orgUsername/class-and-subject/classes",
      },
      {
        title: "Sections",
        url: "/orgs/:orgUsername/class-and-subject/sections",
      },
      {
        title: "Subjects",
        url: "/orgs/:orgUsername/class-and-subject/subjects",
      },
    ],
  },
  // {
  //   title: "Quizzes",
  //   url: "/orgs/:orgUsername/quizzes",
  //   icon: FaWpforms,
  //   // permission: permissions.
  // },
  {
    title: "Access Control",
    url: "/orgs/:orgUsername/access-control",
    icon: UserRoundCog,
    permission: PERMISSIONS.ORG_MENU_ACCESS_CONTROL,
  },
  {
    title: "Site",
    url: "/orgs/:orgUsername/site",
    icon: Earth,
    permission: PERMISSIONS.ORG_PREFIX,
  },
  {
    title: "Settings",
    url: "/orgs/:orgUsername/settings",
    icon: Settings2,
    items: [
      {
        title: "General",
        url: "/orgs/:orgUsername/settings",
      },
      {
        title: "Profile",
        url: "/orgs/:orgUsername/settings/profile",
      },
    ],
  },
]
