import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers at Phonio.ai | Join Our Team",
  description: "Explore career opportunities at Phonio.ai. Join us in building the future of voice AI technology.",
}

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
