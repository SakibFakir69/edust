"use client"

import { ComingSoon, Layout } from "@/components"
import { Typography } from "@edust/ui"

export default function Add() {
  return (
    <>
      <Layout>
        <title>Add Student</title>
        <Layout.Header>
          <Typography variant="h1">Add Student</Typography>
        </Layout.Header>

        <Layout.Body>
          <ComingSoon />
        </Layout.Body>
      </Layout>
    </>
  )
}
