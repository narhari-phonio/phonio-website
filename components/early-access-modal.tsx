"use client"

import type React from "react"

import { useState, useRef } from "react"
import { X } from "lucide-react"
import { sendEarlyAccessRequest, type EarlyAccessFormData } from "@/app/actions/send-email"

interface EarlyAccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  if (!isOpen) return null

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // Get the form data
      const formData = new FormData(event.currentTarget)

      // Get the website value and add https:// if needed
      let website = formData.get("website") as string
      if (website && website.trim() !== "") {
        // Only modify if the website field is not empty
        if (!website.startsWith("http://") && !website.startsWith("https://")) {
          website = `https://${website}`
        }
      }

      const data: EarlyAccessFormData = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        website: website,
      }

      const result = await sendEarlyAccessRequest(data)
      setFormStatus(result)

      if (result.success) {
        // Reset the form on success - safely using the ref
        if (formRef.current) {
          formRef.current.reset()
        }

        // Close the modal after 3 seconds on success
        setTimeout(() => {
          onClose()
          setFormStatus(null)
        }, 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <div className="text-left mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Early Access</h3>
            <p className="text-gray-600">Join the waitlist for Phonio's AI-powered phone platform</p>
          </div>

          {formStatus && (
            <div
              className={`p-3 mb-4 rounded-lg text-sm ${formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
            >
              {formStatus.message}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-base font-medium text-gray-700 mb-1.5 text-left">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-base font-medium text-gray-700 mb-1.5 text-left">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1.5 text-left">
                Business Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-base font-medium text-gray-700 mb-1.5 text-left">
                Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                placeholder="https://"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 rounded-lg text-white font-medium text-sm ${
                  isSubmitting ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
                } transition-colors shadow-sm`}
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
