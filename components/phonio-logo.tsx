export function PhonioLogo({ className = "", size = "default", darkMode = false }) {
  const sizeClasses = {
    default: "h-6",
    large: "h-8",
    small: "h-5",
  }

  const heightClass = sizeClasses[size] || sizeClasses.default
  const textColor = darkMode ? "text-white" : "text-gray-800"
  const iconColor = "text-indigo-600"

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${heightClass} ${iconColor}`}
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
        <line x1="12" x2="12" y1="19" y2="22"></line>
      </svg>
      <span className={`font-bold ${textColor}`}>Phonio.ai</span>
    </div>
  )
}
