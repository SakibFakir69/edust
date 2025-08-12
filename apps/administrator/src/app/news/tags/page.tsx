"use client"

import { AuthGuard, Layout } from "@/components"
import { PERMISSIONS } from "@edust/types"
import { Typography } from "@edust/ui"

import { CreateTag } from "./create-tag"
import { TagsTable } from "./tags-table"

export default function NewsTags() {
  return (
    <AuthGuard requiredPermissions={PERMISSIONS.ADM_NEWS_FULL_ACCESS}>
      <Layout>
        <Layout.Header className="flex items-center justify-between">
          <Typography variant="h1">News Tags</Typography>
          <CreateTag />
        </Layout.Header>
        <Layout.Body>
          <TagsTable />
        </Layout.Body>
      </Layout>
    </AuthGuard>
  )
}
