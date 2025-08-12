"use client"

import { AuthGuard, Layout } from "@/components"
import { PERMISSIONS } from "@edust/types"
import { Button, Typography } from "@edust/ui"
import Link from "next/link"

export default function News() {
  return (
    <AuthGuard requiredPermissions={PERMISSIONS.ADM_NEWS_FULL_ACCESS}>
      <Layout>
        <Layout.Header>
          <Typography variant="h1">News Management</Typography>
        </Layout.Header>
        <Layout.Body>
          <Link href={`/news/create`} className="me-4">
            <Button>Create A News</Button>
          </Link>
          <Link href={`/news/list`}>
            <Button variant={"outline"}>News List</Button>
          </Link>
        </Layout.Body>
      </Layout>
    </AuthGuard>
  )
}
