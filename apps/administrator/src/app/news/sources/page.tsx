"use client"

import { AuthGuard, Layout } from "@/components"
import { PERMISSIONS } from "@edust/types"
import { Typography } from "@edust/ui"

import { CreateSource } from "./create-source"
import { SourcesTable } from "./sources-table"

export default function NewsSources() {
  return (
    <AuthGuard requiredPermissions={PERMISSIONS.ADM_NEWS_FULL_ACCESS}>
      <Layout>
        <Layout.Header className="flex items-center justify-between">
          <Typography variant="h1">News Sources</Typography>
          <CreateSource />
        </Layout.Header>
        <Layout.Body>
          <SourcesTable />
        </Layout.Body>
      </Layout>
    </AuthGuard>
  )
}
