import { NavbarClient } from "./nav-bar-client"

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavbarClient />
      <main>{children}</main>
    </>
  )
}
