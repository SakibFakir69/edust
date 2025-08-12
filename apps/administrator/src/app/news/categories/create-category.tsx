import { convertSlug, extractAxiosErrorMessage } from "@edust/utils"
import { toast } from "sonner"

import { FormDialogArea } from "../components/form-dialog-area"
import { NameForm } from "../components/name-form"
import { newsCategoryHooks } from "../hooks"

export const CreateCategory = () => {
  const create = newsCategoryHooks.usePostCategory()
  return (
    <>
      <FormDialogArea
        buttonText="Create New Category"
        dialogTitle="Create a new category"
        dialogDescription="Make changes to your profile here. Click save when you're done."
      >
        <NameForm
          label="Category Name"
          submitLabel="Create Category"
          loading={create.isPending}
          onSubmit={({ name }) => {
            create.mutate(
              { body: { name, slug: convertSlug(name) } },
              {
                onSuccess: () => toast.success("Category created successfully"),
                onError: (error) => {
                  toast.error(
                    extractAxiosErrorMessage(
                      error,
                      "Failed to create category",
                    ),
                  )
                },
              },
            )
          }}
        />
      </FormDialogArea>
    </>
  )
}
