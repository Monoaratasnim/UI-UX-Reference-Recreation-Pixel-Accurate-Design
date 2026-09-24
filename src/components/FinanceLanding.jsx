import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowDownLeft,
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  Star,
  TrendingUp,
  X,
} from "lucide-react"

const EASE = [0.16, 1, 0.3, 1]

const navLinks = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Blog" },
  { label: "Pages", dropdown: true },
  { label: "Pricing" },
]

const features = [
  "Keep tracking balance",
  "Send money easily",
  "Receive money easily",
  "Convert currency",
]

function FinSuiteLogo({ className = "h-8 w-8 sm:h-9 sm:w-9" }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={`${className} shrink-0`}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="32" height="32" rx="9" fill="#0F0F0F" />
      <rect
        x="8"
        y="10.5"
        width="20"
        height="15"
        rx="3"
        fill="#0F0F0F"
        stroke="#fff"
        strokeWidth="1.6"
      />
      <path d="M8.8 14.5h18.4" stroke="#fff" strokeWidth="1.6" />
      <path d="M10 29l5-4.5" stroke="#B6F53F" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="26.5" cy="24.5" r="2.2" fill="#B6F53F" />
    </svg>
  )
}

function Stars({ className = "text-amber-400" }) {
  return (
    <span className={`flex shrink-0 items-center gap-0.5 ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" strokeWidth={0} />
      ))}
    </span>
  )
}

function ChromeIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} shrink-0`} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#EA4335" />
      <path
        d="M12 1A11 11 0 0 1 21.25 16.5L12 12Z"
        fill="#34A853"
      />
      <path
        d="M12 1A11 11 0 0 0 2.75 16.5L12 12Z"
        fill="#FBBC05"
      />
      <circle cx="12" cy="12" r="4.4" fill="#4285F4" />
      <circle cx="12" cy="12" r="4.4" fill="none" stroke="#fff" strokeWidth="1" />
    </svg>
  )
}

function ProductHuntIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} shrink-0`} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#DA552F" />
      <path
        d="M13.6 7.5h-3.5v9h1.9v-3.2h1.6a2.9 2.9 0 0 0 0-5.8Z"
        fill="#fff"
      />
      <path d="M11.4 7.5v9" stroke="#DA552F" strokeWidth="1.5" />
    </svg>
  )
}

function TrustpilotIcon({ className = "h-7 w-7 sm:h-8 sm:w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} shrink-0`} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#00B67A" />
      <path
        d="M6.4 9.20L11.7 6.9 17 9.2 11.7 11.5 6.4 9.2Z"
        fill="#fff"
        opacity="0.9"
      />
      <path
        d="M6.4 14.55L11.7 12.25 17 14.55 11.7 16.85 6.4 14.55Z"
        fill="#fff"
      />
    </svg>
  )
}

function SpotifyIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} shrink-0`} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1DB954" />
      <path
        d="M7 9.4c4.2-1.5 8.8-.7 11 .2"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M7.4 12.7c3.4-1.3 7.4-.6 9.4.3"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M7.9 15.8c2.6-1 5.5-.5 7.1.2"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <FinSuiteLogo />
          <span className="text-[17px] sm:text-[18px] font-bold tracking-tight text-[#0F0F0F]">
            FinSuite
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1 text-[15px] font-medium text-slate-600 transition-colors hover:text-[#0F0F0F]"
            >
              {link.label}
              {link.dropdown && (
                <ChevronDown
                  className="h-3.5 w-3.5 opacity-70"
                  strokeWidth={2.5}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="#"
            className="hidden text-[15px] font-medium text-[#0F0F0F] transition-opacity hover:opacity-70 sm:block"
          >
            Log In
          </a>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden items-center rounded-full bg-[#0F0F0F] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/15 transition-colors hover:bg-slate-800 sm:inline-flex"
          >
            Get Started
          </motion.a>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0F0F0F] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: EASE }}
        className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#0F0F0F]"
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown className="h-4 w-4 opacity-70" strokeWidth={2.5} />
                )}
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-3 border-t border-slate-100 pt-4">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="flex flex-1 items-center justify-center rounded-full border border-slate-200 py-2.5 text-sm font-semibold text-[#0F0F0F]"
            >
              Log In
            </a>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="flex flex-1 items-center justify-center rounded-full bg-[#0F0F0F] py-2.5 text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </nav>
      </motion.div>
    </header>
  )
}

function DashboardMockup() {
  const [netflixGone, setNetflixGone] = useState(false)
  const [spotifyGone, setSpotifyGone] = useState(false)
  const [hovered, setHovered] = useState(6)

  const purpleIndex = 6
  const bars = [
    { h: 24, v: "$1,842.00" },
    { h: 38, v: "$2,115.00" },
    { h: 30, v: "$1,970.00" },
    { h: 50, v: "$2,840.00" },
    { h: 42, v: "$2,430.00" },
    { h: 34, v: "$2,050.00" },
    { h: 96, v: "$4,239.12" },
    { h: 92, v: "$4,239.12" },
    { h: 48, v: "$2,620.00" },
    { h: 36, v: "$2,120.00" },
    { h: 26, v: "$1,880.00" },
    { h: 30, v: "$1,960.00" },
    { h: 22, v: "$1,740.00" },
    { h: 24, v: "$1,790.00" },
  ]
  const actions = [
    { icon: ArrowUpRight, label: "Send" },
    { icon: ArrowDownLeft, label: "Receive" },
    { icon: ArrowLeftRight, label: "Convert" },
  ]
  const tooltipLeft = Math.min(
    88,
    Math.max(12, ((hovered + 0.5) / bars.length) * 100),
  )

  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        className="relative rounded-[20px] sm:rounded-[24px] bg-white p-4 sm:p-6 shadow-[0_24px_48px_rgba(15,23,42,0.08)] border border-slate-100"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          </div>
          <span className="h-1 w-8 sm:w-10 rounded-full bg-[#D1D5DB]" />
        </div>

        <div className="relative mt-5 sm:mt-6">
          <AnimatePresence>
            {!netflixGone && (
              <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="flex w-[72%] sm:w-[66%] items-center justify-between gap-2 sm:gap-3 rounded-[16px] sm:rounded-[18px] border border-slate-100 bg-white p-3.5 sm:p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <span className="shrink-0 text-[28px] sm:text-[34px] font-bold leading-none tracking-tight text-[#E50914]">
                    N
                  </span>
                  <div>
                    <p className="text-[13px] sm:text-[15px] font-bold text-[#111111]">
                      Netflix
                    </p>
                    <p className="mt-3 sm:mt-4 text-[16px] sm:text-[20px] font-bold leading-tight tracking-tight text-[#111111]">
                      $24
                      <span className="ml-1 text-[11px] sm:text-[13px] font-medium leading-none text-[#6B7280]">
                        /month
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <button
                    onClick={() => setNetflixGone(true)}
                    aria-label="Dismiss Netflix"
                    className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-500"
                  >
                    <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={2.5} />
                  </button>
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400">
                    <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.75} />
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!spotifyGone && (
              <motion.div
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="absolute -top-3 right-0 z-10 w-[58%] min-w-[145px] max-w-[248px] rotate-[4deg] sm:-right-6 sm:w-[58%] sm:min-w-[208px]"
              >
                <div className="rounded-[18px] sm:rounded-[22px] bg-[#3B6EF6] p-4 sm:p-6 text-white shadow-[0_16px_32px_rgba(59,110,246,0.35)]">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white">
                      <SpotifyIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <div>
                      <p className="text-[14px] sm:text-[17px] font-bold">
                        Spotify
                      </p>
                      <p className="text-[9px] sm:text-[10px] font-medium text-blue-200">
                        Premium
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 flex items-center justify-between gap-2 sm:gap-3">
                    <p className="text-[22px] sm:text-[28px] font-bold leading-none tracking-tight">
                      $13
                      <span className="ml-1 text-[11px] sm:text-[12px] font-medium text-blue-200">
                        /month
                      </span>
                    </p>
                    <div className="flex shrink-0 flex-col items-center gap-1 rounded-full bg-white/15 p-1">
                      <button
                        onClick={() => setSpotifyGone(true)}
                        aria-label="Dismiss Spotify card"
                        className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-[#3B6EF6] transition-opacity hover:opacity-80"
                      >
                        <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={2.75} />
                      </button>
                      <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-[#3B6EF6]">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={3.2} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[13px] sm:text-[14px] font-semibold tracking-wide text-[#4B5563]">
              My Balance
            </p>
            <p className="mt-1 text-[28px] sm:text-[38px] font-bold tracking-[-0.02em] text-[#111111]">
              $9,823.28
            </p>
            <p className="mt-1.5 text-[12px] sm:text-[13px] font-medium text-[#6B7280]">
              You made an extra $2,832.19 this month.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2.5 sm:gap-4">
            {actions.map((action) => (
              <div
                key={action.label}
                className="flex flex-col items-center gap-1"
              >
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#F0F1F3] text-[#111111]">
                  <action.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.4} />
                </span>
                <span className="text-[11px] sm:text-[12px] font-medium text-[#6B7280]">
                  {action.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-stretch gap-2">
            <div className="flex h-[140px] sm:h-[150px] shrink-0 flex-col justify-between text-right text-[11px] sm:text-[12px] font-medium leading-none text-[#6B7280]">
              <span>125K</span>
              <span>100K</span>
              <span>75K</span>
              <span>50K</span>
              <span>25K</span>
              <span>0</span>
            </div>
            <div className="relative h-[140px] sm:h-[150px] flex-1">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-between">
                  <span className="border-t border-[#E5E7EB]" />
                  <span className="border-t border-[#E5E7EB]" />
                  <span className="border-t border-[#E5E7EB]" />
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-white to-transparent" />
                <div className="absolute inset-0 flex items-end justify-between gap-1">
                  {bars.map((bar, i) => (
                    <button
                      key={i}
                      type="button"
                      onMouseEnter={() => setHovered(i)}
                      style={{ height: `${bar.h}%` }}
                      className={`shrink-0 rounded-t-[6px] transition-colors ${
                        i === purpleIndex
                          ? "relative w-4 sm:w-7 bg-gradient-to-b from-[#8B5CF6] to-[#7C5CFC]"
                          : "w-[6px] sm:w-3 bg-[#F3F4F6]"
                      }`}
                      aria-label={`Bar value ${bar.v}`}
                    >
                      {i === purpleIndex && (
                        <span className="pointer-events-none absolute -top-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.3)]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div
                style={{ left: `${tooltipLeft}%` }}
                className="pointer-events-none absolute top-0 z-10 -translate-x-1/2 rounded-[8px] bg-[#111827] px-2 py-1 text-[11px] sm:text-[13px] font-bold text-white shadow-lg whitespace-nowrap"
              >
                {bars[hovered].v}
                <span className="absolute -bottom-1 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[5px] border-t-[5px] border-x-transparent border-t-[#111827]" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FF] to-[#FFFFFF] pb-16 pt-8 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-16"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F3E8FF] px-3.5 py-1.5 sm:px-4 sm:py-2 text-[12px] sm:text-[13px] font-medium text-[#8B5CF6]">
              <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
              Finance Solutions for You
            </span>

            <h1 className="mt-5 sm:mt-7 text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F0F0F]">
              <span className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1">
                Maximize
                <span className="relative inline-flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center lg:h-10 lg:w-10">
                  <span className="absolute -right-1 -top-1 sm:-right-1.5 sm:-top-1.5 h-4 w-4 sm:h-5 sm:w-5 rounded-[6px] bg-[#C6F135] lg:h-6 lg:w-6" />
                  <span className="relative flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#0F0F0F] text-white lg:h-10 lg:w-10">
                    <TrendingUp
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                      strokeWidth={2.75}
                    />
                  </span>
                </span>
              </span>
              <span className="block mt-1">
                Your{" "}
                <span className="relative inline-block whitespace-nowrap text-[#3B6EF6]">
                  Financial
                  <svg
                    viewBox="0 0 250 18"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-[2%] w-[96%]"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 14.5C75 5.5 175 4.5 240 10"
                      stroke="#D3DDFF"
                      strokeWidth="7"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.7"
                    />
                    <path
                      d="M24 15C85 7.5 165 7.5 228 11"
                      stroke="#3B6EF6"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
              <span className="block mt-1">Potential</span>
            </h1>

            <p className="mt-4 sm:mt-6 max-w-md text-[15px] sm:text-[16px] leading-relaxed text-[#6B7280]">
              Welcome to FinSuite, where financial management meets simplicity
              and efficiency.
            </p>

            <div className="mt-6 flex flex-col items-start">
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center rounded-full bg-[#0F0F0F] py-3 pl-5 pr-3 sm:py-3.5 sm:pl-6 sm:pr-3.5 text-[15px] font-bold text-white shadow-xl shadow-slate-900/20 transition-colors hover:bg-slate-800"
              >
                Get Started
                <span className="ml-3 sm:ml-4 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.4} />
                </span>
              </motion.a>
            </div>
          </motion.div>

          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const platforms = [
    {
      name: "Chrome store",
      rating: "4.8",
      icon: <ChromeIcon className="h-7 w-7 sm:h-8 sm:w-8" />,
      stars: "text-[#FBBF24]",
    },
    {
      name: "Producthunt",
      rating: "4.9",
      icon: <ProductHuntIcon className="h-7 w-7 sm:h-8 sm:w-8" />,
      stars: "text-[#EA580C]",
    },
    {
      name: "Trustpilot",
      rating: "4.8",
      icon: <TrustpilotIcon className="h-7 w-7 sm:h-8 sm:w-8" />,
      stars: "text-[#00B67A]",
    },
  ]

  return (
    <section className="border-y border-slate-200/60 bg-[#f8fafc]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <h2 className="text-center text-[20px] sm:text-[24px] font-bold tracking-tight">
          <span className="text-[#3B82F6]">Trusted by </span>
          <span className="text-[#0F0F0F]">users across the platform</span>
        </h2>
        <div className="mt-8 sm:mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-12">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center gap-4 sm:justify-start"
            >
              <span className="text-[36px] sm:text-[46px] font-extrabold leading-none tracking-tight text-[#0F0F0F]">
                {p.rating}
              </span>
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <div className="flex items-center gap-2">
                  {p.icon}
                  <span className="text-[14px] sm:text-[15px] font-bold text-slate-900 tracking-tight">
                    {p.name}
                  </span>
                </div>
                <Stars className={p.stars} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function Showcase() {
  const actions = [
    { icon: ArrowUpRight, label: "Send" },
    { icon: ArrowDownLeft, label: "Receive" },
    { icon: ArrowLeftRight, label: "Convert" },
  ]

  // 3rd bar is the tall gradient bar intersecting the card
  const bars = [
    { h: "55%" },
    { h: "70%" },
    { h: "98%", isGradient: true },
    { h: "82%" },
    { h: "60%" },
    { h: "78%" },
    { h: "88%" },
    { h: "75%" },
    { h: "65%" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
    >
      <div className="relative rounded-[24px] sm:rounded-[32px] bg-white p-5 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden">
        {/* Balance card shifted down so it cleanly overlaps/touches the 3rd tall bar */}
        <div className="relative z-20 mb-[-36px] sm:mb-[-46px] ml-2 sm:ml-4 w-[330px] sm:w-[420px] max-w-full rounded-[18px] sm:rounded-[22px] bg-[#A3E635] p-4 sm:p-6 shadow-md rotate-[353deg] sm:rotate-[4deg]">
          <p className="text-[12px] sm:text-[13px] font-semibold text-slate-800 tracking-wide">My Balance</p>
          <div className="mt-1 flex items-baseline justify-between">
            <h4 className="text-[26px] sm:text-[32px] font-extrabold tracking-tight text-slate-900">$9,823.28</h4>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              {actions.map((act) => (
                <div key={act.label} className="flex flex-col items-center">
                  <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm">
                    <act.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-[12px] font-medium text-slate-700">
            Your made an extra $2,832.19 in this month.
          </p>
        </div>

        <div className="pt-16 sm:pt-20">
          <div className="flex items-end justify-between gap-2 sm:gap-3 h-[180px] sm:h-[200px] px-1 sm:px-2 relative">
            {/* 125K scale axis labels */}
            <div className="absolute left-2 sm:left-4 top-0 flex flex-col justify-between h-[170px] sm:h-[190px] text-[10px] sm:text-[11px] font-medium text-slate-400 pointer-events-none z-30">
              <span>125K</span>
              <span>100K</span>
              <span>75K</span>
              <span>50K</span>
              <span>25K</span>
              <span>0</span>
            </div>

            <div className="w-full pl-10 sm:pl-12 flex items-end justify-between h-full">
              {bars.map((bar, i) => (
                <div
                  key={i}
                  style={{ height: bar.h }}
                  className={`w-5 sm:w-7 rounded-t-lg transition-all relative ${
                    bar.isGradient
                      ? "bg-gradient-to-b from-[#A3E635] via-[#38BDF8] to-[#818CF8]"
                      : "bg-slate-100"
                  }`}
                >
                  {bar.isGradient && (
                    <div className="absolute inset-x-0 top-3 bottom-3 flex flex-col items-center justify-between pointer-events-none">
                      <div className="w-[2px] h-full border-r border-dashed border-white/70" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function EmpowerSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-3xl text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight">
            <span className="text-[#3B82F6]">Empower</span>{" "}
            <span className="text-slate-900">Your Financial</span>
            <span className="block text-slate-900 mt-1 sm:mt-2">Future with us</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Showcase />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight">
              <span className="block text-slate-900">Comprehensive</span>
              <span className="block text-[#3B82F6]">Financial Analytics</span>
              <span className="block text-slate-900">Dashboard</span>
            </h3>

            <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] leading-relaxed text-slate-500">
              Gain real-time visibility into your financial performance with powerful analytics that help you make smarter decisions — all in one intuitive dashboard.
            </p>

            <div className="mt-6 sm:mt-8 border-t border-slate-100 pt-6"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 sm:gap-y-4 gap-x-6 text-left">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] font-semibold text-slate-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function FinanceLanding() {
  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-[#FBFCFE] font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <TrustSection />
      <EmpowerSection />
    </main>
  )
}