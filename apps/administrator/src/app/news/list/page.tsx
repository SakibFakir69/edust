"use client"

import { AuthGuard, Layout } from "@/components"
import { PERMISSIONS } from "@edust/types"
import { Button, Typography } from "@edust/ui"
import Link from "next/link"

import { NewsTable } from "./news-table"

export default function NewsList() {
  return (
    <AuthGuard requiredPermissions={PERMISSIONS.ADM_NEWS_FULL_ACCESS}>
      <Layout>
        <Layout.Header className="flex items-center justify-between">
          <Typography variant="h1">News list</Typography>
          <Link href={"/news/create"}>
            <Button>Create News</Button>
          </Link>
        </Layout.Header>
        <Layout.Body>
          <NewsTable />
        </Layout.Body>
      </Layout>
    </AuthGuard>
  )
}
