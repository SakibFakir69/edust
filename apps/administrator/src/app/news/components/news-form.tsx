"use client"

import { useThemeStore } from "@/store"
import { RichTextEditor } from "@edust/rich-text-editor"
import { ApiResponse } from "@edust/types"
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  MultipleSelector,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@edust/ui"
import { extractAxiosErrorMessage, zodAsOptionalField } from "@edust/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { BarLoader } from "react-spinners"
import { toast } from "sonner"
import { z } from "zod"

import React, { useEffect, useState } from "react"

import { newsCategoryHooks, newsSourceHooks, newsTagHooks } from "../hooks"
import { NewsItem, NewsStatus } from "../types"

export const NewsSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required." })
    .max(70, { message: "Title must be at most 70 characters." }),
  summary: z.string().min(1, { message: "Summary is required." }),
  contentHtml: z.string().min(1, { message: "Content is required." }),
  sourceLink: zodAsOptionalField(z.string().url({ message: "Invalid URL." })),
  thumbnailUrl: zodAsOptionalField(z.string().url({ message: "Invalid URL." })),
  categoryId: z.string().uuid({ message: "A valid category is required." }),
  tagIds: z
    .array(z.string().uuid({ message: "Invalid tag format." }))
    .min(1, { message: "At least one tag must be selected." }),
  metaTitle: zodAsOptionalField(z.string().max(60)),
  metaDesc: zodAsOptionalField(z.string().max(160)),
  sourceId: z.string().uuid({ message: "A valid source is required." }),
})
export type NewsFormData = z.infer<typeof NewsSchema> & { status?: NewsStatus }

interface NewsFormProps {
  mode: "create" | "edit"
  defaultValues?: Partial<NewsFormData>
  onSubmit: (data: NewsFormData) => Promise<ApiResponse<{ item: NewsItem }>>
  isSubmitting?: boolean
}

export const NewsForm: React.FC<NewsFormProps> = ({
  mode,
  defaultValues,
  onSubmit,
  isSubmitting = false,
}) => {
  const form = useForm<NewsFormData>({
    resolver: zodResolver(NewsSchema),
    defaultValues: {
      title: "",
      summary: "",
      contentHtml: "",
      categoryId: "",
      tagIds: [],
      sourceId: "",
      ...defaultValues,
    },
  })

  const { theme } = useThemeStore()
  const categoryQuery = newsCategoryHooks.useGetCategories()
  const tagQuery = newsTagHooks.useGetTags()
  const sourceQuery = newsSourceHooks.useGetSources()

  const [selectedTags, setSelectedTags] = useState<
    { label: string; value: string }[]
  >([])

  useEffect(() => {
    if (tagQuery.data?.data.items && defaultValues?.tagIds?.length) {
      const tagOptions = tagQuery.data.data.items
        .filter((tag) => defaultValues.tagIds?.includes(tag.id))
        .map((tag) => ({
          label: tag.name,
          value: tag.id,
        }))

      setSelectedTags(tagOptions)
    }
  }, [tagQuery.data?.data.items, defaultValues?.tagIds])

  useEffect(() => {
    const tagIds = selectedTags.map((v) => v.value)
    form.setValue("tagIds", tagIds.length ? tagIds : [""])
    if (tagIds.length === 0) {
      form.setError("tagIds", {
        message: "At least one tag must be selected.",
      })
    } else {
      form.clearErrors("tagIds")
    }
  }, [form, selectedTags])

  const handleSubmit = async (
    data: NewsFormData,
    event?: React.BaseSyntheticEvent,
  ) => {
    const submitter = (event?.nativeEvent as SubmitEvent | undefined)
      ?.submitter as HTMLButtonElement

    const formAction = submitter?.value ?? ""
    if (formAction === NewsStatus.PUBLISHED) {
      data.status = NewsStatus.PUBLISHED
    } else if (formAction === NewsStatus.DRAFT) {
      data.status = NewsStatus.DRAFT
    }

    try {
      await onSubmit(data)
      if (mode === "create") {
        form.reset()
        setSelectedTags([])
      }
    } catch (error) {
      toast.error(
        extractAxiosErrorMessage(
          error,
          `Failed to ${mode === "create" ? "create" : "update"} news`,
        ),
      )
    }
  }

  useEffect(() => {
    if (defaultValues) {
      form.reset({
        ...form.getValues(),
        ...defaultValues,
      })
    }
  }, [defaultValues, form])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* ========== Basic Inputs ========== */}
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Title <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="summary"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Summary <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="sourceLink"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Source Link</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="thumbnailUrl"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail URL</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ========== Meta ========== */}
        <FormField
          name="metaTitle"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meta Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="metaDesc"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meta Description</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ========== Category & Source ========== */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            name="categoryId"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Category <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryQuery.data?.data.items.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="sourceId"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Source <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      {sourceQuery.data?.data.items.map((source) => (
                        <SelectItem key={source.id} value={source.id}>
                          {source.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ========== Tags (Multi-Select) ========== */}
        <FormField
          name="tagIds"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel>
                Tags <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <MultipleSelector
                  placeholder="Select tags"
                  value={selectedTags}
                  onChange={setSelectedTags}
                  options={
                    tagQuery.data?.data.items.map((tag) => ({
                      label: tag.name,
                      value: tag.id,
                    })) ?? []
                  }
                  emptyIndicator={
                    <p className="text-center text-lg text-gray-600">
                      No tags found.
                    </p>
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ========== Rich Text Editor ========== */}
        <RichTextEditor
          className="my-5"
          theme={theme}
          defaultValue={form.getValues("contentHtml")}
          setContentHtml={(v: string) => form.setValue("contentHtml", v)}
        />

        {/* ========== Buttons ========== */}
        <div className="flex flex-col gap-6 md:flex-row">
          <Button
            onClick={() => form.reset()}
            variant={"destructive"}
            type="button"
          >
            Clear
          </Button>
          <Button
            type="submit"
            name="action"
            value={NewsStatus.PUBLISHED}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <BarLoader color="#fff" />
            ) : mode === "edit" ? (
              "Update & Publish"
            ) : (
              "Create & Publish"
            )}
          </Button>
          <Button
            className="md:flex-grow"
            variant="secondary"
            type="submit"
            name="action"
            value={NewsStatus.DRAFT}
            disabled={isSubmitting}
          >
            {isSubmitting ? <BarLoader color="#fff" /> : "Save as Draft"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
