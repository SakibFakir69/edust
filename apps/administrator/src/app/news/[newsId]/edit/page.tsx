"use client"

import { AuthGuard, Layout } from "@/components"
import { PERMISSIONS } from "@edust/types"
import { Card, CardContent, CardHeader, CardTitle } from "@edust/ui"
import { useParams } from "next/navigation"
import { BarLoader } from "react-spinners"

import { NewsForm } from "../../components/news-form"
import { newsHooks } from "../../hooks"

export default function EditNewsPage() {
  const params = useParams()
  const newsId = params?.newsId as string

  const { data, isLoading, error } = newsHooks.useGetNewsById(newsId)
  const { mutateAsync: updateNews, isPending: isUpdating } =
    newsHooks.usePatchNewsById()

  if (isLoading) {
    return (
      <Layout>
        <Layout.Body>
          <div className="flex justify-center pt-10">
            <BarLoader />
          </div>
        </Layout.Body>
      </Layout>
    )
  }

  if (error || !data) {
    return (
      <Layout>
        <Layout.Body>
          <p className="text-destructive pt-10 text-center">
            Failed to load news data.
          </p>
        </Layout.Body>
      </Layout>
    )
  }

  const news = data.data

  // Prepare default values for the form based on fetched news
  const mappedDefaultValues = {
    title: news.title,
    summary: news.summary,
    contentHtml: news.contentHtml,
    sourceLink: news.sourceLink ?? undefined,
    thumbnailUrl: news.thumbnailUrl ?? undefined,
    categoryId: news.category.id,
    tagIds: news.tags.map((tag) => tag.id),
    metaTitle: news.metaTitle ?? undefined,
    metaDesc: news.metaDesc ?? undefined,
    sourceId: news.source.id,
  }

  return (
    <AuthGuard requiredPermissions={PERMISSIONS.ADM_NEWS_FULL_ACCESS}>
      <Layout>
        <Layout.Body>
          <Card className="mx-auto max-w-3xl">
            <CardHeader>
              <CardTitle>Edit News</CardTitle>
            </CardHeader>
            <CardContent>
              <NewsForm
                mode="edit"
                defaultValues={mappedDefaultValues}
                onSubmit={(data) => {
                  return updateNews({ newsId, body: data })
                }}
                isSubmitting={isUpdating}
              />
            </CardContent>
          </Card>
        </Layout.Body>
      </Layout>
    </AuthGuard>
  )
}
