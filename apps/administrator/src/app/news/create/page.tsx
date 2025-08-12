"use client"

import { AuthGuard, Layout } from "@/components"
import { PERMISSIONS } from "@edust/types"
import { Card, CardContent, CardHeader, CardTitle } from "@edust/ui"

import { NewsForm } from "../components/news-form"
import { newsHooks } from "../hooks"

export default function NewsCreate() {
  const { mutateAsync: createNews, isPending: isCreating } =
    newsHooks.usePostNews()
  return (
    <AuthGuard requiredPermissions={PERMISSIONS.ADM_NEWS_FULL_ACCESS}>
      <Layout>
        <Layout.Body>
          <Card className="mx-auto max-w-3xl">
            <CardHeader>
              <CardTitle>Create a new news</CardTitle>
            </CardHeader>
            <CardContent>
              <NewsForm
                mode="create"
                onSubmit={(data) => createNews({ body: data })}
                isSubmitting={isCreating}
              />
            </CardContent>
          </Card>
        </Layout.Body>
      </Layout>
    </AuthGuard>
  )
}
