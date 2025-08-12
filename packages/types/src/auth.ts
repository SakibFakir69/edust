import type { Organization, Permissions, Roles, User } from "@edust/types"

export type Academics = Pick<
  Organization,
  "id" | "name" | "orgUsername" | "profilePic"
> & { studentId: string; orgId: string }

export type AuthMe = User & {
  systemRole: null | {
    roles: ["ADMINISTRATOR"]
    permissions: Permissions
  }
  organizations: null | Array<Organization>
  academics: null | Array<Academics>
  profiles: null | Array<{
    id: string
    role: Roles.student
    studentId: string
    organization: Pick<
      Organization,
      "id" | "name" | "orgUsername" | "profilePic"
    >
  }>
}
