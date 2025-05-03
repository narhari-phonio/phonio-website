"use client"

import { useState } from "react"
import { EarlyAccessModal } from "./early-access-modal"

interface EarlyAccessButtonProps {
  className?: string
}

export function EarlyAccessButton({ className = "" }: EarlyAccessButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Function to get the user's IP address on the client side
  const openModalWithIp = async () => {
    try {
      // This is just to help with debugging - we'll still rely on server-side detection
      const response = await fetch("https://api.ipify.org?format=json")
      const data = await response.json()
      console.log("Client IP detected:", data.ip)
    } catch (error) {
      console.error("Error detecting IP on client side:", error)
    }

    // Open the modal regardless of whether we could get the IP
    setIsModalOpen(true)
  }

  return (
    <>
      <button
        onClick={openModalWithIp}
        className={`bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm hover:shadow ${className}`}
      >
        Request Early Access
      </button>

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
