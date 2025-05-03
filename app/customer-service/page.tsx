import PageLayout from "@/components/page-layout"
import { EarlyAccessButton } from "@/components/early-access-button"

export default function CustomerServicePage() {
  return (
    <PageLayout
      pageTitle="Customer Service Solutions"
      pageDescription="Engage & support customers 24/7 with Phonio's AI-powered customer service platform"
      bgColor="bg-indigo-100"
    >
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-600 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 bg-indigo-100 border border-indigo-200 px-4 py-1.5 rounded-full text-xs font-medium text-indigo-600 mb-6 tracking-wider">
                <span>CUSTOMER SERVICE SOLUTIONS</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-indigo-600 leading-tight">
                Elevate Your{" "}
                <span className="relative inline-block">
                  Customer Experience
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-200 -z-10"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                Deliver exceptional customer service around the clock with our AI-powered phone platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-indigo-600">Customer Service Metrics That Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-5xl font-bold text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                85%
              </div>
              <div className="w-16 h-1 bg-indigo-200 mx-auto mb-4"></div>
              <p className="text-gray-600">First-call resolution rate with AI assistance</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-5xl font-bold text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="w-16 h-1 bg-indigo-200 mx-auto mb-4"></div>
              <p className="text-gray-600">Support availability without additional staffing</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-5xl font-bold text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                60%
              </div>
              <div className="w-16 h-1 bg-indigo-200 mx-auto mb-4"></div>
              <p className="text-gray-600">Reduction in average handle time</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-5xl font-bold text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                40%
              </div>
              <div className="w-16 h-1 bg-indigo-200 mx-auto mb-4"></div>
              <p className="text-gray-600">Cost savings compared to traditional call centers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-bl-full -mr-6 -mt-6 group-hover:bg-indigo-200 transition-colors"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22 12H16L14 15H10L8 12H2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-600">24/7 Support Coverage</h3>
                  <p className="text-gray-600">
                    Provide round-the-clock customer support without the cost of a 24/7 human team.
                  </p>
                </div>
              </div>
              <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-bl-full -mr-6 -mt-6 group-hover:bg-indigo-200 transition-colors"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 17H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-600">Instant Issue Resolution</h3>
                  <p className="text-gray-600">
                    Resolve common customer issues immediately with AI that understands and responds to customer needs.
                  </p>
                </div>
              </div>
              <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-bl-full -mr-6 -mt-6 group-hover:bg-indigo-200 transition-colors"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14Z"
                        fill="currentColor"
                      />
                      <path
                        d="M8 18C8.55228 18 9 17.5523 9 17C9 16.4477 8.55228 16 8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16 18C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16C15.4477 16 15 16.4477 15 17C15 17.5523 15.4477 18 16 18Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-600">Seamless Human Handoff</h3>
                  <p className="text-gray-600">
                    When complex issues arise, our AI smoothly transfers calls to your human agents with full context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 p-10 rounded-2xl shadow-lg text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to transform your customer service?</h2>
              <p className="text-lg mb-8 text-indigo-100">
                Join the businesses that are delivering exceptional customer experiences while reducing costs with
                Phonio's AI-powered phone platform.
              </p>
              <EarlyAccessButton />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
