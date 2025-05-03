import PageLayout from "@/components/page-layout"
import { EarlyAccessButton } from "@/components/early-access-button"

export default function RetentionPage() {
  return (
    <PageLayout
      pageTitle="Retention Solutions"
      pageDescription="Keep customers engaged with Phonio's AI-powered retention platform"
      bgColor="bg-sky-100"
    >
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-sky-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-sky-600 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 bg-sky-100 border border-sky-200 px-4 py-1.5 rounded-full text-xs font-medium text-sky-600 mb-6 tracking-wider">
                <span>RETENTION SOLUTIONS</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-sky-600 leading-tight">
                Maximize Customer{" "}
                <span className="relative inline-block">
                  Lifetime Value
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-sky-200 -z-10"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                Keep your customers engaged and loyal with proactive retention strategies powered by AI.
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 mb-4 group-hover:bg-sky-200 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 12L7 16L13 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 12L21 16L17 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-600 transition-colors">
                  Proactive Engagement
                </h3>
                <p className="text-gray-600">Identify at-risk customers and reach out proactively before they churn.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 mb-4 group-hover:bg-sky-200 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 12V22H4V12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 7H2V12H22V7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22V7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 7H16.5C17.3284 7 18 6.32843 18 5.5C18 4.67157 17.3284 4 16.5 4C15.6716 4 15 4.67157 15 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 7H7.5C6.67157 7 6 6.32843 6 5.5C6 4.67157 6.67157 4 7.5 4C8.32843 4 9 4.67157 9 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-600 transition-colors">
                  Personalized Retention Offers
                </h3>
                <p className="text-gray-600">
                  Deliver tailored offers and incentives based on customer history and preferences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 mb-4 group-hover:bg-sky-200 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-600 transition-colors">
                  Feedback Collection
                </h3>
                <p className="text-gray-600">
                  Gather valuable insights through automated phone surveys and feedback calls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-sky-600 text-center">Retention Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-sky-100 rounded-bl-full -mr-6 -mt-6 group-hover:bg-sky-200 transition-colors"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-4 text-sky-600">Subscription Renewal</h3>
                <p className="text-gray-600 mb-4">
                  Automatically contact customers before their subscription expires with personalized renewal offers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-3 mt-0.5">
                      •
                    </span>
                    <span>Timely reminders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-3 mt-0.5">
                      •
                    </span>
                    <span>Custom incentives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-3 mt-0.5">
                      •
                    </span>
                    <span>One-click renewal</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-sky-100 rounded-bl-full -mr-6 -mt-6 group-hover:bg-sky-200 transition-colors"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-4 text-sky-600">Win-Back Campaigns</h3>
                <p className="text-gray-600 mb-4">
                  Re-engage former customers with personalized offers that address their specific reasons for leaving.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-3 mt-0.5">
                      •
                    </span>
                    <span>Targeted messaging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-3 mt-0.5">
                      •
                    </span>
                    <span>Special comeback offers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-3 mt-0.5">
                      •
                    </span>
                    <span>Improved value proposition</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-sky-100 rounded-bl-full -mr-6 -mt-6 group-hover:bg-sky-200 transition-colors"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-4 text-sky-600">Loyalty Programs</h3>
                <p className="text-gray-600 mb-4">
                  Build stronger relationships through personalized loyalty programs communicated via phone.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-3 mt-0.5">
                      •
                    </span>
                    <span>Point updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-3 mt-0.5">
                      •
                    </span>
                    <span>Reward notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mr-3 mt-0.5">
                      •
                    </span>
                    <span>Exclusive member offers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-sky-600">Success Story</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-sky-50 to-indigo-50 p-10 rounded-2xl border border-sky-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-sky-600"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-left">
                <blockquote className="text-xl italic text-gray-700 mb-6">
                  "After implementing Phonio's retention solution, we saw a 45% decrease in customer churn and a 30%
                  increase in customer lifetime value within just three months."
                </blockquote>
                <div className="font-semibold text-sky-600">Sarah Johnson</div>
                <div className="text-gray-500">Customer Success Director, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-sky-500 to-indigo-600 p-10 rounded-2xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to boost customer retention?</h2>
            <p className="text-lg mb-8 text-sky-100">
              Join the businesses that are increasing customer lifetime value and reducing churn with Phonio's
              AI-powered phone platform.
            </p>
            <EarlyAccessButton />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
