import { convertSlug, extractAxiosErrorMessage } from "@edust/utils"
import { toast } from "sonner"

import { FormDialogArea } from "../components/form-dialog-area"
import { NameForm } from "../components/name-form"
import { newsTagHooks } from "../hooks"

export const CreateTag = () => {
  const create = newsTagHooks.usePostTag()

  return (
    <FormDialogArea
      buttonText="Create New Tag"
      dialogTitle="Create a new tag"
      dialogDescription="Define a new tag for categorizing articles."
    >
      <NameForm
        label="Tag Name"
        submitLabel="Create Tag"
        loading={create.isPending}
        onSubmit={({ name }) => {
          create.mutate(
            { body: { name, slug: convertSlug(name) } },
            {
              onSuccess: () => toast.success("Tag created successfully"),
              onError: (error) => {
                toast.error(
                  extractAxiosErrorMessage(error, "Failed to create tag"),
                )
              },
            },
          )
        }}
      />
    </FormDialogArea>
  )
}
