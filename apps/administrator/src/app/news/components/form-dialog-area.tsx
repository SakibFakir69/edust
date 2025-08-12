import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@edust/ui"
import { cn } from "@edust/ui/utils"

import React from "react"

type FormDialogAreaProps = {
  children: React.ReactNode
  buttonText?: string
  dialogTitle: string
  dialogDescription?: string
  contentAreaClasses?: string
}

export const FormDialogArea: React.FC<FormDialogAreaProps> = (props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{props.buttonText || "Create New"}</Button>
      </DialogTrigger>
      <DialogContent
        className={cn(props.contentAreaClasses, "sm:max-w-[425px]")}
      >
        <DialogHeader>
          <DialogTitle>{props.dialogTitle}</DialogTitle>
          {props.dialogDescription && (
            <DialogDescription>{props.dialogDescription}</DialogDescription>
          )}
        </DialogHeader>
        {props.children}
      </DialogContent>
    </Dialog>
  )
}
