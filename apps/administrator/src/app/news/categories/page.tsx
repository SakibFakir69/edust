"use client"

import { AuthGuard, Layout } from "@/components"
import { PERMISSIONS } from "@edust/types"
import { Typography } from "@edust/ui"

import { CategoriesTable } from "./categories-table"
import { CreateCategory } from "./create-category"

export default function NewsCategories() {
  return (
    <AuthGuard requiredPermissions={PERMISSIONS.ADM_NEWS_FULL_ACCESS}>
      <Layout>
        <Layout.Header className="flex items-center justify-between">
          <Typography variant="h1">News Categories</Typography>
          <CreateCategory />
        </Layout.Header>
        <Layout.Body>
          <CategoriesTable />
        </Layout.Body>
      </Layout>
    </AuthGuard>
  )
}
