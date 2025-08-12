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

import { newsTagHooks } from "../hooks"
import { BaseStatus } from "../types"

export const TagsTable = () => {
  const { data, isLoading } = newsTagHooks.useGetTags()

  if (isLoading) {
    return <Typography>Loading...</Typography>
  }

  const items = data?.data.items ?? []

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40%]">Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Updated</TableHead>
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
              No tags found
            </TableCell>
          </TableRow>
        ) : (
          items.map((tag) => (
            <TableRow key={tag.id}>
              <TableCell className="font-medium">{tag.name}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    tag.status === BaseStatus.ACTIVE ? "default" : "outline"
                  }
                >
                  {tag.status || "Unknown"}
                </Badge>
              </TableCell>
              <TableCell>{format(tag.updatedAt, "MMM d yyyy")}</TableCell>
              <TableCell className="text-right">
                {format(tag.createdAt, "MMM d yyyy")}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
