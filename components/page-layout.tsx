import { Mail } from "lucide-react"
import { PhonioLogo } from "@/components/phonio-logo"
import Link from "next/link"

export default function PageLayout({ children, pageTitle, pageDescription, bgColor = "bg-purple-100" }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <PhonioLogo />
          </Link>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">hello@phonio.ai</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className={`${bgColor} py-20`}>
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-1.5 bg-white/80 px-4 py-1.5 rounded-full text-xs font-medium text-purple-600 mb-6 tracking-wider">
              <span>[ PHONIO.AI ]</span>
            </div>
            <h1 className="text-[48px] font-bold mb-4 tracking-tight leading-none text-gray-800">{pageTitle}</h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-700 mb-8">{pageDescription}</p>
          </div>
        </section>

        {children}
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
