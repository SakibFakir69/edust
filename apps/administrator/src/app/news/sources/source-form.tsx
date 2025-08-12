"use client"

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@edust/ui"
import { convertSlug, extractAxiosErrorMessage } from "@edust/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { BeatLoader } from "react-spinners"
import { toast } from "sonner"
import { z } from "zod"

import { newsSourceHooks } from "../hooks"

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  websiteUrl: z.string().url("Must be a valid URL").optional(),
  logoUrl: z.string().url("Must be a valid image URL").optional(),
  description: z.string().max(300).optional(),
})

export const SourceForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      websiteUrl: "",
      logoUrl: "",
      description: "",
    },
  })

  const createSource = newsSourceHooks.usePostSource()

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const slug = convertSlug(values.name)

    const payload = {
      ...values,
      slug,
    }

    createSource.mutate(
      { body: payload },
      {
        onSuccess: () => {
          toast.success("Source created successfully")
          form.reset()
        },
        onError: (error) => {
          toast.error(
            extractAxiosErrorMessage(error, "Failed to create source"),
          )
        },
      },
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Source Name</FormLabel>
              <FormControl>
                <Input placeholder="BBC News" {...field} />
              </FormControl>
              <FormDescription>
                This will be used to generate the slug.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Website URL */}
        <FormField
          control={form.control}
          name="websiteUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL</FormLabel>
              <FormControl>
                <Input placeholder="https://news.example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Logo URL */}
        <FormField
          control={form.control}
          name="logoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logo URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://cdn.example.com/logo.png"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a short description for this source"
                  {...field}
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={createSource.isPending}>
          {createSource.isPending ? <BeatLoader size={10} /> : "Create Source"}
        </Button>
      </form>
    </Form>
  )
}
