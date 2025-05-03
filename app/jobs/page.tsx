import Link from "next/link"
import { Mail } from "lucide-react"
import { PhonioLogo } from "@/components/phonio-logo"
import { HexagonPattern } from "@/components/icons"
import { ArrowIcon } from "@/components/card-patterns"

export const metadata = {
  title: "Careers at Phonio.ai | Join Our Team",
  description: "Explore career opportunities at Phonio.ai. Join us in building the future of voice AI technology.",
}

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <PhonioLogo />
          </Link>
          <a
            href="mailto:hello@phonio.ai"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Send email to hello@phonio.ai"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm">hello@phonio.ai</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24 text-center relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <HexagonPattern />
            </div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-gray-100/80 px-4 py-1.5 rounded-full text-xs font-medium text-purple-400 mb-6 md:mb-10 tracking-wider">
              <span>[ JOIN OUR TEAM ]</span>
            </div>

            <h1 className="text-[36px] md:text-[52px] font-bold mb-4 md:mb-6 tracking-tight leading-none">
              <span className="text-purple-600">Careers at Phonio.ai</span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl md:text-[28px] text-gray-800 mb-10 md:mb-16 leading-tight font-normal">
              Help us build the future of voice AI technology <br className="hidden md:block" />
              and transform how businesses communicate
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/jobs/frontend-engineer" className="block">
                <JobCard
                  title="Frontend Engineer"
                  subtitle="Next.js"
                  location="Surat, Gujarat"
                  bgColor="bg-purple-100"
                />
              </Link>
              <Link href="/jobs/backend-engineer" className="block">
                <JobCard title="Backend Engineer" subtitle="Node.js" location="Surat, Gujarat" bgColor="bg-blue-100" />
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-1.5 bg-gray-100/80 px-4 py-1.5 rounded-full text-xs font-medium text-purple-400 mb-6 md:mb-10 tracking-wider">
            <span>[ OPEN APPLICATION ]</span>
          </div>

          <h2 className="text-[32px] md:text-[40px] font-bold text-purple-600 mb-6 md:mb-10">
            Don't see a role that fits?
          </h2>

          <div className="max-w-3xl mx-auto text-gray-700 space-y-6 md:space-y-8">
            <p className="text-base md:text-lg leading-relaxed">
              We're always looking for talented individuals to join our team. If you're passionate about AI, voice
              technology, or creating intuitive products for businesses, we'd love to hear from you.
            </p>

            <div className="pt-4 md:pt-6">
              <a
                href="mailto:hr@phonio.ai"
                className="bg-purple-600 text-white px-6 md:px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm hover:shadow"
              >
                Send Your Application
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f172a] text-white py-16">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <PhonioLogo darkMode={true} size="large" className="mb-6" />

          <p className="text-gray-400 mb-8 max-w-md">
            The future of voice AI for marketers, e-commerce, and customer service teams.
          </p>

          <p className="text-gray-500 text-sm">© 2025 Phonio.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function JobCard({ title, subtitle, location, bgColor }) {
  return (
    <div
      className={`${bgColor} rounded-lg p-6 text-left relative overflow-hidden group transition-all duration-300 hover:shadow-md h-[180px] md:h-[220px] flex flex-col justify-end`}
    >
      <div className="absolute top-3 right-3">
        <ArrowIcon />
      </div>

      <div className="relative z-10 mt-auto">
        <div className="flex flex-col">
          <h3 className="text-xl md:text-[24px] font-semibold text-gray-800 mb-1 leading-tight">{title}</h3>
          <p className="text-sm md:text-[16px] text-gray-600 mb-2 md:mb-3">{subtitle}</p>
          <div className="flex items-center text-xs md:text-sm text-gray-500">
            <span>{location}</span>
            <span className="mx-2">•</span>
            <span>Full-time</span>
          </div>
        </div>
      </div>
    </div>
  )
}
