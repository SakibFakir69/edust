"use client"

import { Badge, Button, Typography } from "@edust/ui"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { BarLoader } from "react-spinners"

import { newsHooks } from "../hooks"

export default function NewsDetails() {
  const router = useRouter()
  const { newsId } = useParams()
  const newsQuery = newsHooks.useGetNewsById(newsId as string)

  if (newsQuery.isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <BarLoader />
      </div>
    )
  }

  if (newsQuery.error || !newsQuery.data) {
    return (
      <div className="text-destructive mt-10 text-center">News not found.</div>
    )
  }

  const news = newsQuery.data.data

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Back
      </Button>

      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{news.title}</h1>
        {news.status && (
          <Badge variant="outline" className="capitalize">
            {news.status.toLowerCase()}
          </Badge>
        )}
        <Typography className="text-muted-foreground">
          {news.summary}
        </Typography>
      </div>

      {news.thumbnailUrl && (
        <Image
          src={news.thumbnailUrl}
          alt="Thumbnail"
          className="max-h-96 w-full rounded-md object-cover"
          width={100}
          height={100}
        />
      )}

      <div
        dangerouslySetInnerHTML={{ __html: news.contentHtml }}
        className="prose dark:prose-invert max-w-none"
      />

      <div className="space-y-1">
        <h3 className="font-semibold">Meta Info</h3>
        {news.metaTitle && (
          <Typography>
            <strong>Meta Title:</strong> {news.metaTitle}
          </Typography>
        )}
        {news.metaDesc && (
          <Typography>
            <strong>Meta Desc:</strong> {news.metaDesc}
          </Typography>
        )}
        {news.sourceLink && (
          <Typography>
            <strong>Source Link:</strong>{" "}
            <a
              href={news.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View original article
            </a>
          </Typography>
        )}
      </div>

      {/* Category and Source */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <strong>Category:</strong> {news.category?.name || "Unknown"}
        </div>
        <div>
          <strong>Source:</strong> {news.source?.name || "Unknown"}
        </div>
      </div>

      {/* Tags */}
      {news.tags.length > 0 && (
        <div className="space-y-1">
          <strong>Tags:</strong>
          <div className="mt-1 flex flex-wrap gap-2">
            {news.tags.map((tag) => (
              <Badge key={tag.id} variant="secondary">
                {tag.name}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Publish & Audit Info */}
      <div className="text-muted-foreground space-y-1 pt-8 text-sm">
        <Typography>
          <strong>Published At:</strong>{" "}
          {new Date(news.publishedAt).toLocaleString()}
        </Typography>
        <Typography>
          <strong>Created At:</strong>{" "}
          {new Date(news.createdAt).toLocaleString()}
        </Typography>
        <Typography>
          <strong>Updated At:</strong>{" "}
          {new Date(news.updatedAt).toLocaleString()}
        </Typography>
        <Typography>
          <strong>Author ID:</strong> {news.authorId}
        </Typography>
        {news.statusReason && (
          <Typography>
            <strong>Status Reason:</strong> {news.statusReason}
          </Typography>
        )}
      </div>
    </div>
  )
}
