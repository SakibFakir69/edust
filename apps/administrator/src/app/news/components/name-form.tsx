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
} from "@edust/ui"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { BeatLoader } from "react-spinners"
import { z } from "zod"

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
})

type NameFormProps = {
  label?: string
  submitLabel?: string
  onSubmit: (values: { name: string }) => void
  loading?: boolean
}

export const NameForm = ({
  label = "Name",
  submitLabel = "Submit",
  onSubmit,
  loading = false,
}: NameFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  })

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    onSubmit(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input placeholder="Enter name" {...field} />
              </FormControl>
              <FormDescription>
                We’ll automatically generate a slug from this.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading ? <BeatLoader size={10} /> : submitLabel}
        </Button>
      </form>
    </Form>
  )
}
