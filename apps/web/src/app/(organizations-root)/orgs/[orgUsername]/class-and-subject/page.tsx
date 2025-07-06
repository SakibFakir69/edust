"use client"

import { ComingSoon, Layout } from "@/components"
import { Typography } from "@edust/ui"

export default function ClassAndSubject() {
  return (
    <>
      <Layout>
        <title>ClassAndSubject</title>
        <Layout.Header>
          <Typography variant="h1">ClassAndSubject</Typography>
        </Layout.Header>

        <Layout.Body>
          <ComingSoon />
        </Layout.Body>
      </Layout>
    </>
  )
}
