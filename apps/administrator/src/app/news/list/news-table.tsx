import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Typography,
} from "@edust/ui"
import { format } from "date-fns"

import { newsHooks } from "../hooks"
import { NewsStatus } from "../types"
import { NewsTableActions } from "./news-table-actions"

export const NewsTable = () => {
  const { data, isLoading } = newsHooks.useGetNews()

  if (isLoading) {
    return <Typography>Loading...</Typography>
  }

  const items = data?.data.items ?? []

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40%]">Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Published</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={4}
              className="text-muted-foreground text-center text-sm"
            >
              No news found
            </TableCell>
          </TableRow>
        ) : (
          items.map((news) => (
            <TableRow key={news.id}>
              <TableCell className="font-medium">{news.title}</TableCell>
              <TableCell>{news.category?.name ?? "-"}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    news.status === NewsStatus.PUBLISHED ? "default" : "outline"
                  }
                >
                  {news.status || "Unknown"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                {format(news.publishedAt, "MMM d yyyy")}
              </TableCell>
              <TableCell>
                <NewsTableActions newsId={news.id} />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
