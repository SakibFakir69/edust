import { Permissions } from "@edust/types"

import { AuthGuard, AuthGuardProps } from "."

export const HasPermission = (
  props: AuthGuardProps & {
    requiredPermissions: Permissions | Permissions[]
  },
) => {
  return <AuthGuard {...props} />
}
