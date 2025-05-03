import Script from "next/script"

interface JobSchemaProps {
  title: string
  description: string
  datePosted: string
  validThrough: string
  employmentType: string
  jobLocation: string
  hiringOrganization: string
  hiringUrl: string
  baseSalary?: {
    minValue: number
    maxValue: number
    currency: string
  }
  skills?: string[]
}

export function JobSchema({
  title,
  description,
  datePosted,
  validThrough,
  employmentType,
  jobLocation,
  hiringOrganization,
  hiringUrl,
  baseSalary,
  skills = [],
}: JobSchemaProps) {
  const jobSchema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title,
    description,
    datePosted,
    validThrough,
    employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: hiringOrganization,
      sameAs: hiringUrl,
      logo: "https://phonio.ai/favicon.svg",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: jobLocation,
      },
    },
    ...(baseSalary && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: baseSalary.currency,
        value: {
          "@type": "QuantitativeValue",
          minValue: baseSalary.minValue,
          maxValue: baseSalary.maxValue,
          unitText: "YEAR",
        },
      },
    }),
    ...(skills.length > 0 && { skills: skills.join(", ") }),
  }

  return (
    <Script id={`jobSchema-${title.replace(/\s+/g, "-").toLowerCase()}`} type="application/ld+json">
      {JSON.stringify(jobSchema)}
    </Script>
  )
}
