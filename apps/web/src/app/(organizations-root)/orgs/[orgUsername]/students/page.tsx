"use client"

import { Layout } from "@/components"
import { Typography } from "@edust/ui"

export default function Students() {
  return (
    <Layout>
      <Layout.Header>
        <Typography variant="h1">Students</Typography>
      </Layout.Header>
      <Layout.Body>{/* do somethings */}</Layout.Body>
    </Layout>
  )
}
