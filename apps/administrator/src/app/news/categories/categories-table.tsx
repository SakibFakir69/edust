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

import { newsCategoryHooks } from "../hooks"
import { BaseStatus } from "../types"

export const CategoriesTable = () => {
  const { data, isLoading } = newsCategoryHooks.useGetCategories()

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
              No categories found
            </TableCell>
          </TableRow>
        ) : (
          items.map((category) => (
            <TableRow key={category.id}>
              <TableCell className="font-medium">{category.name}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    category.status === BaseStatus.ACTIVE
                      ? "default"
                      : "outline"
                  }
                >
                  {category.status || "Unknown"}
                </Badge>
              </TableCell>
              <TableCell>{format(category.updatedAt, "MMM d yyyy")}</TableCell>
              <TableCell className="text-right">
                {format(category.createdAt, "MMM d yyyy")}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
