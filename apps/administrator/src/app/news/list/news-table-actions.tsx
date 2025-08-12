import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@edust/ui"
import { extractAxiosErrorMessage } from "@edust/utils"
import { MoreHorizontal, Trash } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

import React from "react"

import { newsHooks } from "../hooks"
import { NewsStatus } from "../types"

type NewsTableActionsProps = {
  newsId: string
}

export const NewsTableActions: React.FC<NewsTableActionsProps> = ({
  newsId,
}) => {
  const { mutate: deleteNewsById } = newsHooks.useDeleteNewsById()

  const { mutateAsync: updateNews } = newsHooks.usePatchNewsById()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() =>
              deleteNewsById(
                { newsId: newsId },
                {
                  onSuccess: (response) => {
                    toast.success(response.message)
                  },
                  onError: (error) => {
                    toast.error(extractAxiosErrorMessage(error))
                  },
                },
              )
            }
          >
            <Trash className="text-destructive" /> Delete
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Change Status</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onClick={() =>
                    updateNews({ newsId, body: { status: NewsStatus.DRAFT } })
                  }
                >
                  {NewsStatus.DRAFT}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    updateNews({
                      newsId,
                      body: { status: NewsStatus.PUBLISHED },
                    })
                  }
                >
                  {NewsStatus.PUBLISHED}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/news/${newsId}/edit`}>
            <DropdownMenuItem>Edit news</DropdownMenuItem>
          </Link>
          <Link href={`/news/${newsId}`}>
            <DropdownMenuItem>View news details</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
