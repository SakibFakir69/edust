"use client"

import { ComingSoon, Layout } from "@/components"
import { Typography } from "@edust/ui"

export default function Classes() {
  return (
    <>
      <Layout>
        <title>Classes</title>
        <Layout.Header>
          <Typography variant="h1">Classes</Typography>
        </Layout.Header>

        <Layout.Body>
          <ComingSoon />
        </Layout.Body>
      </Layout>
    </>
  )
}
