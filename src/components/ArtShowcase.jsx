import { useState } from "react"
import { motion } from "framer-motion"
import { Leaf, Menu, Sun, User, X } from "lucide-react"

const EASE = [0.16, 1, 0.3, 1]

const navLinks = [
  { label: "Get Started" },
  { label: "Create strategy", message: true },
  { label: "Pricing" },
  { label: "Contact" },
  { label: "Solution" },
  { label: "E-Commerce" },
]

const artwork = [
  { img: "/images/art1.webp", rotate: "-rotate-6", z: "z-[1]", label: "Vintage" },
  { img: "/images/art2.webp", rotate: "-rotate-3", z: "z-[2]", label: "Sketch" },
  { img: "/images/art3.webp", rotate: "-rotate-1", z: "z-[3]", label: "Pop Art" },
  { img: "/images/art4.webp", rotate: "rotate-0", z: "z-[4]", label: "Surreal" },
  { img: "/images/art5.webp", rotate: "rotate-1", z: "z-[5]", label: "Portrait" },
  { img: "/images/art6.webp", rotate: "rotate-3", z: "z-[6]", label: "Street" },
  { img: "/images/art7.webp", rotate: "rotate-6", z: "z-[7]", label: "Shape" },
]

function StrategyIcon({ className = "h-4.5 w-4.5 shrink-0" }) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="18" height="18" rx="4.5" className="fill-slate-900" />
      <line x1="5.5" y1="6.5" x2="5.5" y2="11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="4.5" x2="9" y2="13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12.5" y1="7.5" x2="12.5" y2="10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function TopNav() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#34a853] text-white shadow-md shadow-[#34a853]/30">
            <Leaf className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Pallet Ross
          </span>
        </a>

        <div className="ml-auto flex items-center gap-x-8">
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex items-center gap-1.5 text-[15px] font-semibold text-gray-900 transition-colors hover:text-black"
              >
                {link.message && (
                  <StrategyIcon className="h-4.5 w-4.5 shrink-0" />
                )}
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              aria-label="Account"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 shadow-sm transition-colors hover:text-slate-900"
            >
              <User className="h-4.5 w-4.5" strokeWidth={2} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              aria-label="Settings"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 shadow-sm transition-colors hover:text-slate-900"
            >
              <Sun className="h-4.5 w-4.5" strokeWidth={2} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 shadow-sm lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: EASE }}
        className="overflow-hidden border-t border-slate-100 lg:hidden"
      >
        <nav className="mx-auto max-w-7xl px-6 py-4" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-[15px] font-semibold text-gray-900 transition-colors hover:bg-slate-50 hover:text-black"
              >
                {link.message && (
                  <StrategyIcon className="h-4.5 w-4.5 shrink-0" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </motion.div>
    </motion.header>
  )
}

function ArtworkCard({ art, index }) {
  const badge =
    index === 1
      ? { name: "@coplin", bg: "bg-[#2f70eb]" }
      : index === 6
      ? { name: "@andrea", bg: "bg-[#34a853]" }
      : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.06, ease: EASE }}
      whileHover={{ rotate: 0, scale: 1.05, zIndex: 40 }}
      className={`${art.rotate} ${art.z} relative h-28 w-20 shrink-0 sm:h-40 sm:w-32 lg:h-52 lg:w-40 ${
        index === 0 ? "" : "-ml-6 sm:-ml-10 lg:-ml-16"
      }`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 + index * 0.05, duration: 0.6, ease: EASE }}
          className={`absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap rounded-full ${badge.bg} px-3 py-1 text-[11px] sm:px-4 sm:py-1.5 sm:text-xs font-semibold text-white shadow-lg pointer-events-none`}
        >
          {badge.name}
          <span className={`absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 ${badge.bg}`} />
        </motion.span>
      )}
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/25 transition-transform duration-200">
        <img
          src={art.img}
          alt={`${art.label} artwork`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  )
}

function ArtSection() {
  return (
    <div className="relative mx-auto mt-12 flex w-fit max-w-full origin-top scale-[.85] justify-center sm:scale-100 sm:mt-16">
      <div className="flex items-stretch">
        {artwork.map((art, i) => (
          <ArtworkCard key={art.label} art={art} index={i} />
        ))}
      </div>
    </div>
  )
}

function ArtShowcase() {
  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-gradient-to-b from-white via-slate-50/80 to-white">
      <TopNav />

      <section className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
            className="mx-auto mb-6 max-w-4xl text-center text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-slate-900 sm:text-5xl lg:text-[64px]"
          >
            A place to display your masterpiece.
          </motion.h1>
        </div>

        <ArtSection />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: EASE }}
          className="mx-auto mt-10 mb-8 max-w-xl text-center text-base font-medium text-gray-700 sm:text-lg"
        >
          Artists can display their masterpieces, and buyers can discover
          and purchase works that resonate with them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.6, ease: EASE }}
          className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 font-medium text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 sm:w-auto"
          >
            Join for $9.99/m
          </motion.button>
          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className="w-full rounded-full px-6 py-3.5 font-medium text-slate-700 transition-all hover:bg-slate-100/80 hover:text-slate-900 sm:w-auto"
          >
            Read more
          </motion.button>
        </motion.div>
      </section>
    </main>
  )
}

export default ArtShowcase