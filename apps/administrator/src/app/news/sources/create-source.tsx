"use client"

import { FormDialogArea } from "../components/form-dialog-area"
import { SourceForm } from "./source-form"

export const CreateSource = () => {
  return (
    <FormDialogArea
      buttonText="Create New Source"
      dialogTitle="Create a New News Source"
      dialogDescription="Add a reliable source that will be associated with news publications."
    >
      <SourceForm />
    </FormDialogArea>
  )
}
