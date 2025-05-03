import Link from "next/link"
import { Mail, ArrowLeft } from "lucide-react"
import { PhonioLogo } from "@/components/phonio-logo"
import { JobSchema } from "@/components/job-schema"
import { EarlyAccessButton } from "@/components/early-access-button"
import { HexagonPattern } from "@/components/icons"

export const metadata = {
  title: "Backend Engineer (Node.js) | Careers at Phonio.ai",
  description:
    "Join Phonio.ai as a Backend Engineer and help build our Node.js-based voice AI platform for businesses.",
}

export default function BackendEngineerJobPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JobSchema
        title="Backend Engineer (Node.js)"
        description="Phonio.ai is looking for a Backend Engineer with Node.js experience to help build and scale our Voice AI platform."
        datePosted="2025-03-04"
        validThrough="2025-06-04"
        employmentType="FULL_TIME"
        jobLocation="Surat, Gujarat"
        hiringOrganization="Phonio.ai"
        hiringUrl="https://phonio.ai"
        skills={["Node.js", "REST APIs", "WebSockets", "MongoDB", "AWS", "LLMs", "Telephony APIs"]}
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
            <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <HexagonPattern />
            </div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <Link href="/jobs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all jobs
            </Link>

            <h1 className="text-[32px] font-bold mb-4 tracking-tight leading-none text-blue-600">
              Backend Engineer - Node.js (Voice AI Platform)
            </h1>

            <div className="flex flex-wrap gap-4 text-gray-600 mb-8">
              <span className="bg-blue-50 px-3 py-1 rounded-full text-sm">Surat</span>
              <span className="bg-blue-50 px-3 py-1 rounded-full text-sm">Full-time</span>
              <span className="bg-blue-50 px-3 py-1 rounded-full text-sm">Competitive</span>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
              <p className="text-lg text-gray-600 mb-0">
                We are looking for a Backend Engineer (Node.js) to help build and scale our Voice AI platform. You will
                work on integrating real-time AI, telephony APIs, and LLMs.
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
                  <li>Develop and maintain APIs (REST, WebSockets, gRPC) to handle real-time voice interactions.</li>
                  <li>Integrate telephony APIs (Twilio, Plivo, Vonage) for call automation and customer engagement.</li>
                  <li>Implement AI-driven voice workflows by integrating OpenAI GPT-4, Claude, Gemini.</li>
                  <li>Optimize database performance in MongoDB, ensuring low-latency query execution.</li>
                  <li>Ensure high availability and scalability using AWS services, Kubernetes, and Docker.</li>
                  <li>Work with real-time data processing for speech recognition (ASR) and text-to-speech (TTS).</li>
                  <li>Implement authentication and security best practices (OAuth, JWT, rate limiting).</li>
                  <li>Collaborate with frontend and AI engineers to create seamless voice automation workflows.</li>
                </ul>
              </JobSection>

              <JobSection title="Requirements">
                <ul className="list-disc pl-5 space-y-2">
                  <li>3+ years of experience in backend development using Node.js.</li>
                  <li>Strong experience with REST, WebSockets, and gRPC APIs.</li>
                  <li>Hands-on experience with MongoDB, including indexing and optimization.</li>
                  <li>Experience integrating LLMs (OpenAI, Claude, Gemini) into backend workflows.</li>
                  <li>Familiarity with telephony APIs (Twilio, Plivo, etc.).</li>
                  <li>Strong knowledge of AWS.</li>
                  <li>Experience with Docker & Terraform (good to have).</li>
                  <li>Understanding of real-time systems & event-driven architecture.</li>
                </ul>
              </JobSection>

              <JobSection title="Nice to Have">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Knowledge of AI model fine-tuning & inference optimization.</li>
                  <li>Previously having experienced 0-1 journey of an AI product.</li>
                </ul>
              </JobSection>

              <JobSection title="Why Join Us?">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Work on the future of voice AI, transforming how businesses communicate.</li>
                  <li>Opportunity to shape a rapidly growing industry in AI-driven voice automation.</li>
                  <li>Collaborate with a team that values innovation, scalability, and real-world impact.</li>
                  <li>Gain hands-on experience working with state-of-the-art AI models and cloud infrastructure.</li>
                </ul>
              </JobSection>

              <JobSection title="How to Apply">
                <p>
                  If you're excited about building AI-powered voice automation at scale, we'd love to hear from you.
                  Apply now by sending an email at{" "}
                  <a href="mailto:hr@phonio.ai" className="text-blue-600 hover:text-blue-700 font-medium">
                    hr@phonio.ai
                  </a>
                </p>
              </JobSection>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-1.5 bg-gray-100/80 px-4 py-1.5 rounded-full text-xs font-medium text-blue-400 mb-6 tracking-wider">
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
