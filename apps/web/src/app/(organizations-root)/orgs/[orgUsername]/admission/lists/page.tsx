"use client"

import { ComingSoon, Layout } from "@/components"
import { Typography } from "@edust/ui"

export default function Lists() {
  return (
    <>
      <Layout>
        <title>Admission Lists</title>
        <Layout.Header>
          <Typography variant="h1">Admission Lists</Typography>
        </Layout.Header>

        <Layout.Body>
          <ComingSoon />
        </Layout.Body>
      </Layout>
    </>
  )
}
