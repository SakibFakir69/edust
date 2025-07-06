"use client"

import { ComingSoon, Layout } from "@/components"
import { Typography } from "@edust/ui"

export default function NewAdmission() {
  return (
    <>
      <Layout>
        <title>New Admission </title>
        <Layout.Header>
          <Typography variant="h1">New Admission </Typography>
        </Layout.Header>

        <Layout.Body>
          <ComingSoon />
        </Layout.Body>
      </Layout>
    </>
  )
}
