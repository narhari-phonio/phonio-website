import PageLayout from "@/components/page-layout"
import { EarlyAccessButton } from "@/components/early-access-button"

export default function ECommercePage() {
  return (
    <PageLayout
      pageTitle="E-Commerce Solutions"
      pageDescription="Never miss a purchase with Phonio's AI-powered e-commerce platform"
      bgColor="bg-purple-100"
    >
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-600 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full text-xs font-medium text-purple-600 mb-6 tracking-wider">
                <span>E-COMMERCE SOLUTIONS</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-purple-600 leading-tight">
                Transform Your{" "}
                <span className="relative inline-block">
                  Online Store
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-purple-200 -z-10"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                Our AI-powered e-commerce platform helps you boost sales, improve customer satisfaction, and streamline
                operations.
              </p>
            </div>
            <div className="max-w-3xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-200 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 6V12L16 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    24/7 Customer Support
                  </h3>
                  <p className="text-gray-600">
                    Our AI phone system handles customer inquiries around the clock, ensuring you never miss a sale
                    opportunity.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-200 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    Abandoned Cart Recovery
                  </h3>
                  <p className="text-gray-600">
                    Automatically follow up with customers who abandoned their carts through personalized phone calls.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-200 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H15M9 17L12 20M9 17L12 14M15 17L12 20M15 17L12 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    Order Status Updates
                  </h3>
                  <p className="text-gray-600">
                    Keep customers informed about their orders with automated status updates via phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-50 to-indigo-50 p-10 rounded-2xl border border-purple-100">
            <h2 className="text-3xl font-bold mb-6 text-purple-600">Ready to transform your e-commerce business?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the businesses that are boosting sales and improving customer satisfaction with Phonio's AI-powered
              phone platform.
            </p>
            <EarlyAccessButton />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
