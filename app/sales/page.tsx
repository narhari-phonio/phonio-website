import PageLayout from "@/components/page-layout"
import { EarlyAccessButton } from "@/components/early-access-button"

export default function SalesPage() {
  return (
    <PageLayout
      pageTitle="Sales Solutions"
      pageDescription="Turn calls into revenue with Phonio's AI-powered sales platform"
      bgColor="bg-blue-100"
    >
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 bg-blue-100 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-medium text-blue-600 mb-6 tracking-wider">
                <span>SALES SOLUTIONS</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-blue-600 leading-tight">
                Supercharge Your{" "}
                <span className="relative inline-block">
                  Sales Team
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-200 -z-10"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                Empower your sales team with AI-powered tools that increase efficiency and drive revenue growth.
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 11L12 14L22 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Automated Lead Qualification
                </h3>
                <p className="text-gray-600">
                  Our AI phone system pre-qualifies leads before they reach your sales team, saving time and increasing
                  efficiency.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 7V3M16 7V3M7 11H17M5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Intelligent Follow-ups
                </h3>
                <p className="text-gray-600">
                  Never miss a follow-up opportunity with automated, personalized calls to prospects at the perfect
                  time.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 8V16M12 11V16M8 14V16M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Sales Performance Analytics
                </h3>
                <p className="text-gray-600">
                  Gain insights into your sales process with detailed analytics and conversation intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-600 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-8 -mt-8 group-hover:bg-blue-200 transition-colors"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">For Sales Managers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>Increase team productivity by 35%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>Reduce cost per acquisition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>Scale outreach without adding headcount</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>Detailed performance analytics</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-8 -mt-8 group-hover:bg-blue-200 transition-colors"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">For Sales Representatives</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>Focus on high-value conversations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>Eliminate repetitive tasks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>AI-powered call coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>Higher conversion rates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl border border-blue-100">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Ready to boost your sales performance?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the businesses that are increasing conversion rates and driving revenue growth with Phonio's
              AI-powered phone platform.
            </p>
            <EarlyAccessButton />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
