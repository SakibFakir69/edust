"use client"

import { permissions } from "@/lib/pm"
import { PermissionValues } from "@edust/types"
import {
  Earth,
  House,
  LayoutDashboard,
  LucideIcon,
  Settings2,
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
  permission?: PermissionValues
  items?: {
    title: string
    url: string
    isActive?: boolean
    permission?: PermissionValues
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
    permission: permissions.orgMenuStudents,
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
  {
    title: "Quizzes",
    url: "/orgs/:orgUsername/quizzes",
    icon: FaWpforms,
    // permission: permissions.
  },
  {
    title: "Access Control",
    url: "/orgs/:orgUsername/access-control",
    icon: UserRoundCog,
    permission: permissions.orgMenuAccessControl,
  },
  {
    title: "Site",
    url: "/orgs/:orgUsername/site",
    icon: Earth,
    permission: permissions.orgMenuSite,
  },
  {
    title: "Settings",
    url: "/orgs/:orgUsername/settings",
    icon: Settings2,
    items: [
      {
        title: "Profile",
        url: "/orgs/:orgUsername/settings/profile",
      },
    ],
  },
]
