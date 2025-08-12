import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Typography,
} from "@edust/ui"
import { format } from "date-fns"

import { newsSourceHooks } from "../hooks"

export const SourcesTable = () => {
  const { data, isLoading } = newsSourceHooks.useGetSources()

  if (isLoading) {
    return <Typography>Loading...</Typography>
  }

  const items = data?.data.items ?? []

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[30%]">Name</TableHead>
          <TableHead>Website</TableHead>
          <TableHead className="text-right">Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={4}
              className="text-muted-foreground text-center text-sm"
            >
              No sources found
            </TableCell>
          </TableRow>
        ) : (
          items.map((source) => (
            <TableRow key={source.id}>
              <TableCell className="font-medium">{source.name}</TableCell>
              <TableCell>
                {source.websiteUrl ? (
                  <a
                    href={source.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    {source.websiteUrl}
                  </a>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell className="text-right">
                {format(source.createdAt, "MMM d yyyy")}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
