export default function Logo({ light = false, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 select-none group cursor-pointer ${className}`}>
      {/* Option 1: Native Transparent Emblem (Zero Card / Zero Box) */}
      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
        <img
          src="/brand-logo-transparent.png"
          alt="bizgrw emblem"
          className={`w-full h-full object-contain transition-transform duration-200 group-hover:scale-105 ${
            light ? 'invert hue-rotate-180' : ''
          }`}
        />
      </div>

      {/* Grotesque Wordmark in Geist style */}
      <span
        className={`text-xl sm:text-2xl font-[700] tracking-[-0.035em] leading-none ${
          light ? 'text-white' : 'text-[#141414]'
        }`}
        style={{ fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        bizgrw
      </span>
    </div>
  )
}
