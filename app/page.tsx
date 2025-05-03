import { Mail } from "lucide-react";
import { HexagonPattern } from "@/components/icons";
import { PhonioLogo } from "@/components/phonio-logo";
import { EarlyAccessButton } from "@/components/early-access-button";
import { AnnouncementBar } from "@/components/announcement-bar";
import Link from "next/link";
import {
  ECommercePattern,
  SalesPattern,
  CustomerServicePattern,
  RetentionPattern,
  ArrowIcon,
} from "@/components/card-patterns";
import VoiceAgent from "@/components/agent/agent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />

      <div>
        <VoiceAgent />
      </div>

      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <PhonioLogo />
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
        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24 text-center relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <HexagonPattern />
            </div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-gray-100/80 px-4 py-1.5 rounded-full text-xs font-medium text-purple-400 mb-4 md:mb-6 lg:mb-10 tracking-wider">
              <span>[ OUR PRODUCT ]</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[52px] font-bold mb-2 md:mb-3 tracking-tight leading-tight">
              <span className="text-purple-600">1st Phone AI platform</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-[28px] text-gray-800 -mt-1 mb-8 md:mb-10 lg:mb-16 leading-tight font-normal max-w-xl mx-auto">
              for marketers, e-commerce, sales, customer service, retention, and
              growing businesses
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              <Link href="/e-commerce" className="block">
                <FeatureCard
                  title="E-Commerce"
                  description="Never miss a purchase"
                  bgColor="bg-purple-100"
                  pattern={<ECommercePattern />}
                />
              </Link>
              <Link href="/sales" className="block">
                <FeatureCard
                  title="Sales"
                  description="Turn calls into revenue"
                  bgColor="bg-blue-100"
                  pattern={<SalesPattern />}
                />
              </Link>
              <Link href="/customer-service" className="block">
                <FeatureCard
                  title="Customer Service"
                  description="Engage & support customers 24/7"
                  bgColor="bg-indigo-100"
                  pattern={<CustomerServicePattern />}
                />
              </Link>
              <Link href="/retention" className="block">
                <FeatureCard
                  title="Retention"
                  description="Keep customers engaged"
                  bgColor="bg-sky-100"
                  pattern={<RetentionPattern />}
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20 text-center">
          <div className="inline-flex items-center gap-1.5 bg-gray-100/80 px-4 py-1.5 rounded-full text-xs font-medium text-purple-400 mb-6 md:mb-8 lg:mb-10 tracking-wider">
            <span>[ OUR MISSION ]</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-purple-600 mb-6 md:mb-8 lg:mb-10">
            We are getting ready...
          </h2>

          <div className="max-w-3xl mx-auto text-gray-700 space-y-6 md:space-y-8">
            <p className="text-base md:text-lg leading-relaxed">
              Phonio is the 1st phone AI and marketing automation platform
              designed for marketers, e-commerce, sales, customer service,
              retention, and growing businesses. We empower businesses of all
              sizes to easily set up complex AI solutions that integrate
              directly into their workflows.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              While others build phone AI solutions for developers, we're
              building it for the people who actually use it. Marketers,
              customer service teams, and e-commerce teams need solutions that
              integrate directly into their workflows—no coding required. Phonio
              is designed to be an platform any business department can use, not
              just programmers.
            </p>

            <div className="pt-4 md:pt-6">
              <EarlyAccessButton />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f172a] text-white py-16">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <PhonioLogo darkMode={true} size="large" className="mb-6" />

          <p className="text-gray-400 mb-8 max-w-md">
            The future of voice AI for marketers, e-commerce, and customer
            service teams.
          </p>

          <p className="text-gray-500 text-sm">
            © 2025 Phonio.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  bgColor,
  pattern,
}: {
  title: string;
  description: string;
  bgColor: string;
  pattern: React.ReactNode;
}) {
  return (
    <div
      className={`${bgColor} rounded-lg p-5 md:p-6 text-left relative overflow-hidden group transition-all duration-300 hover:shadow-md h-[220px] md:h-[260px] lg:h-[320px] flex flex-col justify-end`}
    >
      <div className="absolute top-3 right-3">
        <ArrowIcon />
      </div>

      {pattern}

      <div className="relative z-10 mt-auto">
        <h3 className="text-xl md:text-[24px] font-semibold text-gray-800 mb-1 leading-tight">
          {title}
        </h3>
        <p className="text-sm md:text-[16px] text-gray-600">{description}</p>
      </div>
    </div>
  );
}
