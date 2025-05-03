"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [hasBeenClosed, setHasBeenClosed] = useState(false)

  // Check if the announcement has been closed before
  useEffect(() => {
    const closed = sessionStorage.getItem("announcementClosed")
    if (closed) {
      setHasBeenClosed(true)
      setIsVisible(false)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Remember that the user closed the announcement for this session only
    sessionStorage.setItem("announcementClosed", "true")
    setHasBeenClosed(true)
  }

  if (!isVisible) return null

  return (
    <div className="bg-gray-50 border-b border-gray-100 text-gray-600 py-1 text-xs">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-1.5">
          <span className="text-purple-500">📢</span>
          <span className="text-purple-500 font-medium">We're hiring</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline text-gray-500">Join our team and help build the future of voice AI</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/jobs" className="text-purple-600 hover:text-purple-700 text-xs font-medium transition-colors">
            View Jobs →
          </Link>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors flex items-center"
            aria-label="Close announcement"
          >
            <X size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}
