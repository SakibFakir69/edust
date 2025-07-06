"use client"

import { ComingSoon, Layout } from "@/components"
import { Typography } from "@edust/ui"

export default function Admission() {
  return (
    <>
      <Layout>
        <title>Admission</title>
        <Layout.Header>
          <Typography variant="h1">Admission</Typography>
        </Layout.Header>

        <Layout.Body>
          <ComingSoon />
        </Layout.Body>
      </Layout>
    </>
  )
}
