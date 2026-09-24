import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Plane,
  Menu,
  X,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Ticket,
  Smartphone,
} from "lucide-react"

const EASE = [0.16, 1, 0.3, 1]

function AppleLogoIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-92.1zm-58.3-172.9c16.3-19.8 28.5-47.2 24.3-75.8-24.6 1.4-53.6 16.6-70.3 36.6-14.7 17.3-27.9 45.4-23.4 73.1 27.6 2.1 53.6-14.2 69.4-33.9z" />
    </svg>
  )
}

function CapsuleLogoIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} shrink-0 drop-shadow-sm`} aria-hidden="true">
      {/* Back translucent circle (staggered slightly top-left) */}
      <circle cx="8.5" cy="10.5" r="6.5" fill="#FFFFFF" fillOpacity="0.45" />
      {/* Front solid white circle (staggered slightly bottom-right) */}
      <circle cx="15.5" cy="13.5" r="6.5" fill="#FFFFFF" />
    </svg>
  )
}

function CirclePlusIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  )
}

function NorwayFlagIcon({ className = "h-7 w-10" }) {
  return (
    <svg viewBox="0 0 22 16" className={`${className} rounded-[4px] shadow-sm shrink-0`} aria-hidden="true">
      <rect width="22" height="16" fill="#BA0C2F" />
      <path d="M6 0h4v16H6zM0 6h22v4H0z" fill="#ffffff" />
      <path d="M7 0h2v16H7zM0 7h22v2H0z" fill="#00205B" />
    </svg>
  )
}

function USAFlagIcon({ className = "h-7 w-10" }) {
  return (
    <svg viewBox="0 0 22 16" className={`${className} rounded-[4px] shadow-sm shrink-0`} aria-hidden="true">
      <rect width="22" height="16" fill="#B22234" />
      <path d="M0 2.29h22M0 5.82h22M0 9.35h22M0 12.88h22" stroke="#ffffff" strokeWidth="1.18" />
      <rect width="9.6" height="8.6" fill="#3C3B6E" />
      <circle cx="2.4" cy="2.15" r="0.6" fill="#ffffff" />
      <circle cx="7.2" cy="2.15" r="0.6" fill="#ffffff" />
      <circle cx="4.8" cy="4.3" r="0.6" fill="#ffffff" />
      <circle cx="2.4" cy="6.45" r="0.6" fill="#ffffff" />
      <circle cx="7.2" cy="6.45" r="0.6" fill="#ffffff" />
    </svg>
  )
}

function FloatingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="sticky top-5 z-50 mx-auto w-full max-w-2xl px-4"
    >
      <div className="flex items-center justify-between rounded-full border border-white/30 bg-white/20 px-5 py-2 shadow-lg shadow-blue-950/10 backdrop-blur-md transition-all hover:border-white/50">
        {/* Left Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <CapsuleLogoIcon className="h-7 w-7 transition-transform group-hover:scale-105" />
          <span className="text-base sm:text-lg font-bold tracking-tight text-white drop-shadow-sm">
            Capsule
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <a
            href="#pricing"
            className="text-xs font-semibold text-white/90 transition-colors hover:text-white"
          >
            Pricing
          </a>
          <button className="flex items-center gap-1 text-xs font-semibold text-white/90 transition-colors hover:text-white">
            <span>Company</span>
            <ChevronDown className="h-3.5 w-3.5 opacity-80" />
          </button>
          <button className="flex items-center gap-1 text-xs font-semibold text-white/90 transition-colors hover:text-white">
            <span>Help</span>
            <ChevronDown className="h-3.5 w-3.5 opacity-80" />
          </button>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-white/40 bg-transparent px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-white/10"
          >
            Log in
          </motion.button>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className="rounded-full p-1.5 text-white transition-colors hover:bg-white/20 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="mt-2 overflow-hidden rounded-2xl border border-white/30 bg-blue-950/90 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2 font-semibold text-xs text-white">
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 transition-colors hover:bg-white/15"
              >
                Pricing
              </a>
              <a
                href="#company"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 transition-colors hover:bg-white/15"
              >
                Company
              </a>
              <a
                href="#help"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 transition-colors hover:bg-white/15"
              >
                Help
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function FloatingCards() {
  const [toastMessage, setToastMessage] = useState("")

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(""), 3000)
  }

  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 z-20">
      {/* Toast Feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-slate-950 px-5 py-2.5 text-xs font-semibold text-white shadow-2xl border border-slate-700 flex items-center gap-2"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid w-full grid-cols-2 items-center gap-x-2.5 gap-y-4 pb-6 pt-2 px-2 xl:flex xl:flex-nowrap xl:items-center xl:justify-center xl:overflow-visible xl:gap-5">
        {/* Card 1: Leftmost White Card */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          whileHover={{ rotate: 0, y: -5, zIndex: 40 }}
          className="xl:shrink-0 relative z-10 w-full xl:w-[290px] h-[185px] xl:h-[195px] rounded-[28px] border border-white/90 bg-white p-5 text-slate-900 shadow-2xl shadow-blue-950/20 backdrop-blur-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-[11px] sm:text-[13px] xl:text-[15px] font-semibold tracking-tight text-slate-900 leading-snug">
              Manage your flights, <Plane className="inline-block h-3 w-3 xl:h-4 xl:w-4 text-blue-500 ml-0.5 -mt-0.5" /> <br />
              bookings and documents <Ticket className="inline-block h-3 w-3 xl:h-4 xl:w-4 text-blue-500 ml-0.5 -mt-0.5" /> <br />
              directly in one app <Smartphone className="inline-block h-3 w-3 xl:h-4 xl:w-4 text-blue-500 ml-0.5 -mt-0.5" />
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => showToast("Booking sync feature initialized!")}
            className="flex w-full items-center justify-center whitespace-nowrap gap-1 rounded-full bg-black py-1.5 px-2 text-[10px] font-semibold text-white shadow-md transition-all hover:bg-neutral-800 xl:gap-2 xl:py-2.5 xl:px-4 xl:text-xs"
          >
            <CirclePlusIcon className="h-3 w-3 shrink-0 text-white xl:h-4 xl:w-4" />
            <span>Add your stuff</span>
          </motion.button>
        </motion.div>

        {/* Center Overlapping Pair: Compact Square Shapes with Norway & USA Flags */}
        <div className="contents my-2 xl:flex xl:shrink-0 xl:items-center xl:justify-center xl:-space-x-16 xl:my-0">
          {/* Card 2 (Behind): White Square Card with Norway Flag (Right-side Rotated: rotate-8) */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 8 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            whileHover={{ rotate: 0, y: -5, zIndex: 40 }}
            className="xl:shrink-0 relative z-10 w-full xl:w-[235px] h-[190px] xl:h-[210px] rounded-[28px] border border-white/90 bg-white p-4.5 sm:p-5 text-slate-900 shadow-2xl shadow-blue-950/20 backdrop-blur-xl flex flex-col items-start text-left justify-start gap-2 sm:gap-2.5"
          >
            {/* Top Bar */}
            <div className="flex items-start justify-between w-full">
              <NorwayFlagIcon className="h-8 w-11 sm:h-9 sm:w-13" />
              <div className="text-right font-mono">
                <p className="text-xs font-bold text-slate-900 tracking-wider">WE1786</p>
                <p className="text-[10px] font-medium text-slate-400">#WE975333</p>
              </div>
            </div>

            {/* Main Content & Flight Path Graphic (Directly below flag) */}
            <div className="flex items-end justify-between w-full text-left">
              <div className="flex flex-col items-start text-left">
                <p className="text-xs sm:text-sm font-semibold text-blue-600 tracking-wide uppercase text-left">Norway</p>
                <h4 className="text-3xl sm:text-[36px] font-bold tracking-tight text-slate-900 my-0.5 leading-none text-left">
                  12 Days
                </h4>
                <p className="text-xs sm:text-[13px] font-medium text-slate-400 mt-1 text-left">
                  Thu, 5 Dec
                </p>
              </div>

              {/* Vertical Flight Path */}
              <div className="flex flex-col items-center gap-1 pb-0.5">
                <Plane className="h-4 w-4 text-blue-500 rotate-45" />
                <div className="h-6 w-[2px] border-r-2 border-dashed border-blue-400/80 my-0.5" />
                <Plane className="h-4 w-4 text-blue-500 rotate-[135deg]" />
              </div>
            </div>
          </motion.div>

          {/* Card 3 (Front): Black Square Card with USA Flag (Left-side Rotated: -rotate-6) */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: -6 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            whileHover={{ scale: 1.05, zIndex: 50 }}
            className="xl:shrink-0 relative z-30 w-full xl:w-[245px] h-[200px] xl:h-[220px] rounded-[28px] border border-neutral-800 bg-black p-4.5 sm:p-5 text-white shadow-2xl shadow-black/80 flex flex-col items-start text-left justify-start gap-2 sm:gap-2.5"
          >
            {/* Top Bar */}
            <div className="flex items-start justify-between w-full">
              <USAFlagIcon className="h-8 w-11 sm:h-9 sm:w-13" />
              <div className="text-right font-mono">
                <p className="text-xs font-bold text-white tracking-wider">WE1786</p>
                <p className="text-[10px] font-medium text-gray-400">#WE975333</p>
              </div>
            </div>

            {/* Main Content & Flight Path Graphic (Directly below flag) */}
            <div className="flex items-end justify-between w-full text-left">
              <div className="flex flex-col items-start text-left">
                <p className="text-xs sm:text-sm font-semibold text-blue-400 tracking-wide uppercase text-left">USA</p>
                <h4 className="text-3xl sm:text-[36px] font-bold tracking-tight text-white my-0.5 leading-none text-left">
                  25 Days
                </h4>
                <p className="text-xs sm:text-[13px] font-medium text-gray-400 mt-1 text-left">
                  Fri, 18 Dec
                </p>
              </div>

              {/* Vertical Flight Path */}
              <div className="flex flex-col items-center gap-1 pb-0.5">
                <Plane className="h-4 w-4 text-blue-400 rotate-45" />
                <div className="h-6 w-[2px] border-r-2 border-dashed border-blue-400/80 my-0.5" />
                <Plane className="h-4 w-4 text-blue-400 rotate-[135deg]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card 4: Rightmost Live Tracking White Card */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          whileHover={{ rotate: 0, y: -5, zIndex: 40 }}
          className="xl:shrink-0 relative z-10 w-full xl:w-[240px] h-[195px] xl:h-[215px] rounded-[28px] border border-white/90 bg-white p-4.5 sm:p-5 text-slate-900 shadow-2xl shadow-blue-950/20 backdrop-blur-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold tracking-tight text-slate-900">
                New Jersey
              </h3>
              <ArrowUpRight className="h-4 w-4 text-slate-500" />
            </div>

            {/* Timeline */}
            <div className="my-1.5 flex flex-col gap-1 pl-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Plane className="h-3.5 w-3.5 text-blue-500 rotate-45" />
                <span className="text-slate-500 font-medium text-xs">5:23pm</span>
              </div>
              <div className="ml-1.5 h-5 w-[2px] border-r-2 border-dashed border-slate-300 my-0.5" />
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Plane className="h-3.5 w-3.5 text-blue-500 rotate-[135deg]" />
                <span className="text-slate-500 font-medium text-xs">8:43pm</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold tracking-tight text-slate-900">
                California
              </h3>
              <ArrowDownRight className="h-4 w-4 text-slate-500" />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => showToast("Opening live radar tracking...")}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-2.5 px-4 text-xs font-semibold text-white shadow-md transition-all hover:bg-neutral-800"
          >
            <span>Check it live</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

function TravelLanding() {
  return (
    <main className="relative min-h-dvh w-full overflow-x-hidden text-white selection:bg-white selection:text-blue-600 pb-20 font-sans">
      {/* Background Image & Soft Blue Gradient Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img
          src="/images/cloud.jpg"
          alt="Sky and clouds background"
          className="h-full w-full object-cover object-center brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/50 via-blue-500/40 to-blue-700/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 via-transparent to-blue-900/40" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10">
        {/* Compacted Capsule Navbar */}
        <FloatingNavbar />

        {/* Hero Content */}
        <section className="mx-auto w-full max-w-6xl px-4 pt-6 text-center sm:pt-10">
          {/* Main Heading Layered in z-0 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mx-auto max-w-5xl z-0 relative pb-4 sm:pb-8 lg:pb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[110px] xl:text-[120px] font-semibold tracking-tight leading-[0.96] text-white drop-shadow-md">
              Place for your<br />
              tickets, booking<br />
              and documents
            </h1>
          </motion.div>

          {/* Overlapping Floating Cards Layered in z-20 slightly over 'and documents' line */}
          <div className="relative z-20 -mt-10 sm:-mt-16 lg:-mt-22">
            <FloatingCards />
          </div>

          {/* Subtitle Paragraph Formatted Across 3 Lines */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
            className="mx-auto mt-10 mb-8 max-w-xl text-center text-base sm:text-xl font-medium leading-relaxed text-white/95 drop-shadow-sm"
          >
            Everything related to travelling<br />
            stored in one place. Never<br />
            forget anything important.
          </motion.p>

          {/* Solid White iOS Download CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
            className="flex justify-center"
          >
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="group flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-semibold text-slate-900 shadow-2xl shadow-blue-950/30 transition-all hover:bg-slate-100"
            >
              <AppleLogoIcon className="h-5 w-5 text-slate-900 transition-transform group-hover:scale-110" />
              <span className="text-base font-bold text-slate-900 tracking-tight">
                Download for iOS
              </span>
            </motion.a>
          </motion.div>
        </section>
      </div>
    </main>
  )
}

export default TravelLanding

