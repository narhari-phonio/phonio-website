"use server"

import { Resend } from "resend"
import { headers } from "next/headers"

export type EarlyAccessFormData = {
  firstName: string
  lastName: string
  email: string
  website: string
}

export async function sendEarlyAccessRequest(formData: EarlyAccessFormData) {
  try {
    // Validate the form data
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return { success: false, message: "Please fill in all required fields." }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return { success: false, message: "Please enter a valid email address." }
    }

    // Check if we have the API key
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable")
      return {
        success: false,
        message: "Configuration error. Please contact the administrator.",
      }
    }

    // Get request information for form location
    const headersList = headers()
    const referer = headersList.get("referer") || "Unknown page"
    const userAgent = headersList.get("user-agent") || "Unknown browser"

    // Try to get the client IP address from various headers
    const headerList = headers()

    // Log all headers for debugging
    console.log("All headers:", Object.fromEntries(headerList.entries()))

    // Try multiple headers that might contain the IP
    const forwardedFor = headerList.get("x-forwarded-for")
    const realIp = headerList.get("x-real-ip")
    const cfConnectingIp = headerList.get("cf-connecting-ip") // Cloudflare
    const trueClientIp = headerList.get("true-client-ip") // Akamai and Cloudflare

    // Use the first available IP header
    let ip = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : realIp
        ? realIp
        : cfConnectingIp
          ? cfConnectingIp
          : trueClientIp
            ? trueClientIp
            : "Unknown"

    console.log("Detected IP:", ip)

    // For testing purposes, if we're in a local environment and can't get a real IP,
    // use a fallback public IP that will return location data
    if (ip === "Unknown" || ip === "127.0.0.1" || ip === "::1" || ip.startsWith("192.168.") || ip.startsWith("10.")) {
      console.log("Using fallback IP for local testing")
      ip = "8.8.8.8" // Google's public DNS as a fallback for testing
    }

    // IPinfo API key
    const ipinfoToken = "5acd24bdc4f4d4"

    // Get location information from IPinfo with API key
    let locationInfo = "Location information unavailable"
    let ipDetails = {}

    try {
      console.log(`Fetching location data for IP: ${ip}`)
      const ipinfoUrl = `https://ipinfo.io/${ip}/json?token=${ipinfoToken}`
      console.log("IPinfo URL:", ipinfoUrl)

      const ipinfoResponse = await fetch(ipinfoUrl)
      console.log("IPinfo response status:", ipinfoResponse.status)

      if (ipinfoResponse.ok) {
        const responseText = await ipinfoResponse.text()
        console.log("IPinfo raw response:", responseText)

        try {
          ipDetails = JSON.parse(responseText)
          console.log("Parsed IPinfo data:", ipDetails)

          const { city, region, country, loc, postal, timezone, org } = ipDetails as any

          if (city && region && country) {
            locationInfo = `${city}, ${region}, ${country}`
            if (loc) {
              locationInfo += ` (Coordinates: ${loc})`
            }
            if (postal) {
              locationInfo += ` - Postal: ${postal}`
            }
            if (timezone) {
              locationInfo += ` - Timezone: ${timezone}`
            }
          } else {
            locationInfo =
              "Limited location data available: " +
              Object.entries(ipDetails)
                .filter(([key, value]) => value && typeof value === "string")
                .map(([key, value]) => `${key}: ${value}`)
                .join(", ")
          }
        } catch (parseError) {
          console.error("Error parsing IPinfo JSON:", parseError)
          locationInfo = "Error parsing location data"
        }
      } else {
        console.error("IPinfo API returned error status:", ipinfoResponse.status)
        locationInfo = `IPinfo API error: ${ipinfoResponse.status}`
      }
    } catch (error) {
      console.error("Error fetching location data:", error)
      locationInfo = `Error fetching location: ${error.message || "Unknown error"}`
    }

    // Initialize Resend with the API key
    const resend = new Resend(apiKey)

    // Prepare email content with form location information
    const emailContent = `
      <h2>Phonio Early Access Request</h2>
      <p>You have received a new early access request from:</p>
      <ul>
        <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Website:</strong> ${formData.website || "Not provided"}</li>
      </ul>
      <h3>Form Submission Details:</h3>
      <ul>
        <li><strong>Submitted from:</strong> ${referer}</li>
        <li><strong>Browser:</strong> ${userAgent}</li>
        <li><strong>IP Address:</strong> ${ip}</li>
        <li><strong>Location:</strong> ${locationInfo}</li>
        ${(ipDetails as any).org ? `<li><strong>Network:</strong> ${(ipDetails as any).org}</li>` : ""}
        <li><strong>Date:</strong> ${new Date().toLocaleString()}</li>
      </ul>
    `

    // For debugging - log that we're about to send the email
    console.log("Attempting to send email with Resend...")

    // Send the email using Resend with updated subject
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["abhinav@phonio.ai", "bryan@phonio.ai"],
      subject: "Phonio Early Access Request",
      html: emailContent,
    })

    // Log the response for debugging
    if (data) console.log("Email sent successfully:", data)
    if (error) console.error("Resend API error:", error)

    if (error) {
      return {
        success: false,
        message: "We couldn't send your request right now. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Thank you for joining our waitlist! We'll reach out to you as soon as we release for beta.",
    }
  } catch (error) {
    // Log the full error for debugging
    console.error("Unexpected error in sendEarlyAccessRequest:", error)

    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
