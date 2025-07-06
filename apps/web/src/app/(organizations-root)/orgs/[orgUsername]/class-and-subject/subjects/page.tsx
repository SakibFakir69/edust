"use client"

import { ComingSoon, Layout } from "@/components"
import { Typography } from "@edust/ui"

export default function Subjects() {
  return (
    <>
      <Layout>
        <title>Subjects</title>
        <Layout.Header>
          <Typography variant="h1">Subjects</Typography>
        </Layout.Header>

        <Layout.Body>
          <ComingSoon />
        </Layout.Body>
      </Layout>
    </>
  )
}
