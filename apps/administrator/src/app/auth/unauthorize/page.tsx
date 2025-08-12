import { Typography } from "@edust/ui"
import Link from "next/link"

export default function Unauthorize() {
  return (
    <>
      <Typography variant="h1" className="text-destructive">
        Unauthorize
      </Typography>
      <Link href={"/auth/login"}>Back to login</Link>
    </>
  )
}
