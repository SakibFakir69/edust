"use client"

import { ComingSoon, Layout } from "@/components"
import { Typography } from "@edust/ui"

export default function Sections() {
  return (
    <>
      <Layout>
        <title>Sections</title>
        <Layout.Header>
          <Typography variant="h1">Sections</Typography>
        </Layout.Header>

        <Layout.Body>
          <ComingSoon />
        </Layout.Body>
      </Layout>
    </>
  )
}
