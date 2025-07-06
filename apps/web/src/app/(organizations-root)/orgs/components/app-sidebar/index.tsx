"use client"

import { useAuthStore } from "@/store"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@edust/ui"
import { usePathname } from "next/navigation"

import * as React from "react"

import { NavMain } from "./nav-main"
import { nameMailData } from "./nav-main-data"
import { NavUser } from "./nav-user"
import { OrgSwitcher } from "./org-switcher"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const state = useAuthStore()

  const pathname = usePathname()
  const orgUsername = state.getActiveOrg()?.orgUsername

  const organizations = state.user?.organizations || []

  // Get the rolePermissions from the active organization
  const userPermissions = state.getActiveOrg()?.rolePermissions

  const navMain = React.useMemo(() => {
    if (orgUsername) {
      nameMailData.forEach((item) => {
        if (item.url.includes(":orgUsername")) {
          item.url = item.url.replace(":orgUsername", orgUsername)
        }
        item.isActive = pathname.startsWith(item.url)
        item.items?.forEach((subItem) => {
          if (subItem.url.includes(":orgUsername")) {
            subItem.url = subItem.url.replace(":orgUsername", orgUsername)
          }
          subItem.isActive = pathname.startsWith(subItem.url)
        })
      })
    }

    return nameMailData
  }, [orgUsername, pathname])

  // Filter navMain based on permissions
  const filteredNavMain = React.useMemo(() => {
    return navMain.filter((item) => {
      if (!item.permission) return true
      return userPermissions?.includes(item.permission)
    })
  }, [navMain, userPermissions])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {organizations && organizations.length > 0 && <OrgSwitcher />}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={filteredNavMain} pathname={pathname} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {state.user && (
          <NavUser
            user={{
              id: state.user.id,
              isActive: state.onlineUsers.has(state.user.id),
              name: state.user?.name,
              avatar: state.user?.profilePic || "/images/avatar.png",
              email: state.user?.email,
            }}
          />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
