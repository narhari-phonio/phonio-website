import Link from "next/link"
import { Mail, ArrowLeft } from "lucide-react"
import { PhonioLogo } from "@/components/phonio-logo"
import { JobSchema } from "@/components/job-schema"
import { EarlyAccessButton } from "@/components/early-access-button"
import { HexagonPattern } from "@/components/icons"

export const metadata = {
  title: "Frontend Engineer (Next.js) | Careers at Phonio.ai",
  description:
    "Join Phonio.ai as a Frontend Engineer and help build our Next.js-based voice AI platform for businesses.",
}

export default function FrontendEngineerJobPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JobSchema
        title="Frontend Engineer (Next.js)"
        description="Phonio.ai is looking for a Frontend Engineer with Next.js experience to build an intuitive, high-performance web interface for our Voice AI platform."
        datePosted="2025-03-04"
        validThrough="2025-06-04"
        employmentType="FULL_TIME"
        jobLocation="Surat, Gujarat"
        hiringOrganization="Phonio.ai"
        hiringUrl="https://phonio.ai"
        skills={["Next.js", "JavaScript", "Redux", "SSR", "REST APIs", "WebSockets", "Authentication"]}
      />

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
        <section className="container mx-auto px-4 py-12 relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <HexagonPattern />
            </div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <Link href="/jobs" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all jobs
            </Link>

            <h1 className="text-[32px] font-bold mb-4 tracking-tight leading-none text-purple-600">
              Frontend Engineer - Next.js (Voice AI Platform)
            </h1>

            <div className="flex flex-wrap gap-4 text-gray-600 mb-8">
              <span className="bg-purple-50 px-3 py-1 rounded-full text-sm">Surat</span>
              <span className="bg-purple-50 px-3 py-1 rounded-full text-sm">Full-time</span>
              <span className="bg-purple-50 px-3 py-1 rounded-full text-sm">Competitive</span>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
              <p className="text-lg text-gray-600 mb-0">
                We are looking for a Frontend Engineer (Next.js) to build an intuitive, high-performance web interface
                for our Voice AI platform. You will work closely with backend and AI teams to create seamless
                experiences for businesses using AI-driven voice automation.
              </p>
            </div>

            <div className="space-y-12">
              <JobSection title="About Phonio.ai">
                <p>
                  Phonio.ai is the first Voice AI platform built for business operations, not developers. We help
                  marketers, e-commerce teams, and customer service departments integrate AI-driven voice interactions
                  seamlessly into their workflows.
                </p>
              </JobSection>

              <JobSection title="Responsibilities">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Develop and optimize our web application using Next.js and Redux.</li>
                  <li>
                    Implement server-side rendering (SSR), static generation (SG), and incremental static regeneration
                    (ISR) to enhance performance.
                  </li>
                  <li>Integrate REST APIs, WebSockets, and gRPC for real-time AI-driven interactions.</li>
                  <li>Manage state efficiently using Redux for predictable data flow.</li>
                  <li>Ensure high performance and responsiveness across devices and browsers.</li>
                  <li>Ensure use of cyber security best practices across the entire frontend.</li>
                  <li>Optimize UX/UI design for seamless user experiences with voice AI workflows.</li>
                  <li>Collaborate with backend to ensure smooth end-to-end functionality.</li>
                  <li>Implement authentication flows (OAuth, JWT, session management) securely.</li>
                </ul>
              </JobSection>

              <JobSection title="Requirements">
                <ul className="list-disc pl-5 space-y-2">
                  <li>3+ years of experience in frontend development with Next.js.</li>
                  <li>Strong proficiency in JavaScript.</li>
                  <li>Hands-on experience with Redux for state management.</li>
                  <li>Deep understanding of SSR, ISR, and static site generation (SG) in Next.js.</li>
                  <li>Experience integrating REST APIs, WebSockets, and gRPC.</li>
                  <li>Strong grasp of frontend performance optimization techniques.</li>
                  <li>Familiarity with authentication methods (OAuth, JWT, session handling).</li>
                </ul>
              </JobSection>

              <JobSection title="Nice to Have">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Previous experience working with text editors (e.g., ProseMirror, Tiptap, Quill, lexical).</li>
                  <li>Experience building flow-based UI editors (drag-and-drop workflow builders).</li>
                </ul>
              </JobSection>

              <JobSection title="Why Join Us?">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Work on the future of voice AI, transforming how businesses communicate.</li>
                  <li>Opportunity to shape an AI-powered platform in a fast-growing industry.</li>
                  <li>Collaborate with a team that values innovation, performance, and user experience.</li>
                  <li>Gain hands-on experience with real-time AI, WebSockets, and scalable UI development.</li>
                </ul>
              </JobSection>

              <JobSection title="How to Apply">
                <p>
                  If you're excited about building AI-powered, real-time web applications, we'd love to hear from you.
                  Apply now by sending an email at{" "}
                  <a href="mailto:hr@phonio.ai" className="text-purple-600 hover:text-purple-700 font-medium">
                    hr@phonio.ai
                  </a>
                </p>
              </JobSection>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-1.5 bg-gray-100/80 px-4 py-1.5 rounded-full text-xs font-medium text-purple-400 mb-6 tracking-wider">
                <span>[ OUR PRODUCT ]</span>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-gray-800">Interested in our product?</h2>

              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our waitlist to be among the first to experience Phonio.ai when we launch.
              </p>

              <EarlyAccessButton />
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

function JobSection({ title, children }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="text-gray-600 space-y-4">{children}</div>
    </div>
  )
}
