import { Permissions } from "@/constant"

import React from "react"

import { AuthGuard, AuthGuardProps } from "."

export const HasPermission = (
  props: AuthGuardProps & {
    requiredPermissions: Permissions | Permissions[]
  },
) => {
  return <AuthGuard {...props} />
}
