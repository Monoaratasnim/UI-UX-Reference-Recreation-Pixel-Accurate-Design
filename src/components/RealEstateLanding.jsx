import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Bed,
  Bath,
  Maximize2,
  Menu,
  X,
  Search,
  MapPin,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"

const EASE = [0.16, 1, 0.3, 1]

const navLinks = [
  { label: "Home" },
  { label: "Properties" },
  { label: "About" },
  { label: "Contact" },
]

const mapProperties = [
  {
    id: 1,
    title: "Luxury Oceanfront Bungalow",
    location: "Capeville, MD",
    price: "$20,000",
    investors: "20+investors",
    beds: 3,
    baths: 2,
    sqft: "1,450 sq ft",
    image: "/images/property.jpg",
    badge: "New",
    x: "50%",
    y: "48%",
  },
  {
    id: 2,
    title: "Modern Glass Villa",
    location: "Aspen, CO",
    price: "$45,000",
    investors: "35+investors",
    beds: 4,
    baths: 4,
    sqft: "2,800 sq ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    badge: "Popular",
    x: "24%",
    y: "42%",
  },
  {
    id: 3,
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: "$85,000",
    investors: "50+investors",
    beds: 3,
    baths: 3.5,
    sqft: "2,200 sq ft",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80",
    badge: "Hot",
    x: "78%",
    y: "48%",
  },
  {
    id: 4,
    title: "Suburban Family Haven",
    location: "Austin, TX",
    price: "$15,000",
    investors: "12+investors",
    beds: 4,
    baths: 3,
    sqft: "2,400 sq ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    badge: "Value",
    x: "33%",
    y: "72%",
  },
]

function BrickwiseLogo({ className = "h-7 w-7 sm:h-8 sm:w-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={`${className} shrink-0`} aria-hidden="true">
      <rect x="2" y="14" width="7" height="16" rx="1.5" fill="#0F0F0F" />
      <rect x="12.5" y="8" width="7" height="22" rx="1.5" fill="#0F0F0F" />
      <rect x="23" y="2" width="7" height="28" rx="1.5" fill="#0F0F0F" />
    </svg>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center gap-2">
          <BrickwiseLogo className="h-6 w-6 sm:h-8 sm:w-8" />
          <span className="text-lg sm:text-[20px] font-extrabold tracking-tight text-[#0F0F0F]">
            Brickwise
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden items-center gap-6 lg:flex lg:gap-9" aria-label="Primary">
          {navLinks.map((link, idx) => (
            <div key={link.label} className="relative flex flex-col items-center py-1">
              <a
                href="#"
                className={`text-[15px] font-medium transition-colors hover:text-[#0F0F0F] ${
                  idx === 0 ? "text-[#0F0F0F] font-semibold" : "text-slate-500"
                }`}
              >
                {link.label}
              </a>
              {idx === 0 && (
                <span className="absolute bottom-0 h-[2px] w-6 bg-[#0F0F0F] rounded-full" />
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="#"
            className="hidden text-[15px] font-medium text-[#0F0F0F] transition-opacity hover:opacity-75 sm:block"
          >
            Login
          </a>
          <motion.a
            href="#properties"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden items-center rounded-full bg-[#0F0F0F] px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-colors hover:bg-slate-800 sm:inline-flex"
          >
            Join Now
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

      {/* Mobile Drawer */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: EASE }}
        className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-600 hover:bg-slate-50 hover:text-[#0F0F0F]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-3 border-t border-slate-100 pt-4">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="flex flex-1 items-center justify-center rounded-full border border-slate-200 py-2.5 text-sm font-semibold text-[#0F0F0F]"
            >
              Login
            </a>
            <a
              href="#properties"
              onClick={() => setOpen(false)}
              className="flex flex-1 items-center justify-center rounded-full bg-[#0F0F0F] py-2.5 text-sm font-semibold text-white"
            >
              Join Now
            </a>
          </div>
        </nav>
      </motion.div>
    </header>
  )
}

function Hero() {
  const [selectedProperty, setSelectedProperty] = useState(mapProperties[0])
  const [location, setLocation] = useState("All Locations")
  const [propertyType, setPropertyType] = useState("All")
  const [budget, setBudget] = useState("$500 - $1200")

  return (
    <section className="relative overflow-hidden bg-white pb-12 sm:pb-16 pt-6 sm:pt-8">
      {/* Map Image Background Overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none select-none overflow-hidden">
        <img
          src="/images/map.jpg"
          alt="Map Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 sm:px-4 py-1.5 mb-4 sm:mb-6 text-xs sm:text-[13px] font-semibold text-slate-800 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span>What is Arrived?</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mx-auto max-w-3xl text-3xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.15] sm:leading-[1.12] tracking-[-0.03em] text-[#0F0F0F]"
        >
          Easily Invest in Real Estate to Grow{" "}
          <span className="inline-flex items-center align-middle mx-1">
            <span className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#A3E635] shadow-sm">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-slate-900" strokeWidth={2.5} />
            </span>
          </span>{" "}
          Your Future
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-[16px] leading-relaxed text-slate-500 px-2 sm:px-0"
        >
          Take control of your financial future by diversifying your portfolio with secure and high-yield real estate properties.
        </motion.p>

        {/* Search Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mx-auto mt-6 sm:mt-9 flex max-w-3xl flex-col sm:flex-row items-center justify-between rounded-2xl sm:rounded-full bg-white p-3 sm:p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-200/90 gap-3 sm:gap-0"
        >
          <div className="flex flex-1 items-center justify-between w-full sm:w-auto px-3 sm:px-5 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-slate-100">
            <div className="text-left w-full">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">Location</p>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent text-[13px] sm:text-[14px] font-bold text-slate-900 outline-none cursor-pointer mt-0.5 w-full"
              >
                <option>All Locations</option>
                <option>Capeville, MD</option>
                <option>Aspen, CO</option>
                <option>Manhattan, NY</option>
                <option>Austin, TX</option>
              </select>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-between w-full sm:w-auto px-3 sm:px-5 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-slate-100">
            <div className="text-left w-full">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">Property Type</p>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="bg-transparent text-[13px] sm:text-[14px] font-bold text-slate-900 outline-none cursor-pointer mt-0.5 w-full"
              >
                <option>All</option>
                <option>Bungalow</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Suburban</option>
              </select>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-between w-full sm:w-auto px-3 sm:px-5 py-2 sm:py-0">
            <div className="text-left w-full">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">Budget</p>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="bg-transparent text-[13px] sm:text-[14px] font-bold text-slate-900 outline-none cursor-pointer mt-0.5 w-full"
              >
                <option>$500 - $1200</option>
                <option>$1200 - $5000</option>
                <option>$5000+</option>
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 sm:h-12 w-full sm:w-12 items-center justify-center rounded-xl sm:rounded-full bg-[#0F0F0F] text-white shadow-md hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Search properties"
          >
            <Search className="h-5 w-5" strokeWidth={2.5} />
          </motion.button>
        </motion.div>

        {/* Interactive Map Visual Stage with Responsive Layout */}
        <div className="relative mx-auto mt-10 sm:mt-12 h-[480px] sm:h-[520px] max-w-5xl">
          {/* Map Pins distributed across the map */}
          {mapProperties.map((prop) => {
            const isSelected = selectedProperty.id === prop.id
            return (
              <button
                key={prop.id}
                onClick={() => setSelectedProperty(prop)}
                style={{ left: prop.x, top: prop.y }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 shadow-xl transition-all ${
                  isSelected
                    ? "bg-[#0F0F0F] text-white scale-110 ring-4 ring-slate-300"
                    : "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-[#A3E635] text-[10px] sm:text-[11px] font-extrabold text-slate-900">
                  {prop.id}
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold whitespace-nowrap">{prop.price}</span>
              </button>
            )
          })}

          {/* Centered Floating Detailed Property Card shifted up closer to search bar */}
          <div className="absolute z-30 top-12 sm:top-16 left-1/2 -translate-x-1/2 w-[92%] sm:max-w-[340px]">
            <motion.div
              key={selectedProperty.id}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative rounded-[24px] bg-white p-3.5 sm:p-4 shadow-[0_24px_50px_rgba(15,23,42,0.18)] border border-slate-100 text-left"
            >
              {/* Downward arrow pointer at the bottom center */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 h-5 w-5 rotate-45 bg-white border-r border-b border-slate-200 rounded-sm shadow-md" />

              <div className="relative h-40 sm:h-44 w-full overflow-hidden rounded-[16px]">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-2.5 right-2.5 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-slate-900 shadow-sm">
                  {selectedProperty.badge}
                </span>
              </div>

              <div className="mt-3.5">
                <h4 className="text-[15px] sm:text-[16px] font-extrabold text-slate-900 leading-snug">
                  {selectedProperty.title}
                </h4>
                <p className="mt-1 flex items-center gap-1 text-[11px] sm:text-[12px] text-slate-500 font-medium">
                  <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  {selectedProperty.location}
                </p>

                <div className="mt-3 flex items-center gap-3 sm:gap-4 text-[11px] sm:text-[12px] font-medium text-slate-600">
                  <span className="flex items-center gap-1">
                    <Maximize2 className="h-3.5 w-3.5 text-slate-400" /> {selectedProperty.sqft}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bed className="h-3.5 w-3.5 text-slate-400" /> {selectedProperty.beds} beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-3.5 w-3.5 text-slate-400" /> {selectedProperty.baths} bath
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3.5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[15px] sm:text-[16px] font-extrabold text-slate-900">
                      {selectedProperty.price}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-400">
                      {selectedProperty.investors}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-full bg-[#0F0F0F] px-3.5 sm:px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-slate-800"
                  >
                    Invest Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="bg-white py-10 sm:py-14 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
        >
          <div className="sm:px-6 first:pl-0 flex items-center gap-3 pt-2 sm:pt-0">
            <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F0F0F]">$1B+</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight max-w-[55px]">Total Invested</span>
          </div>
          <div className="sm:px-6 flex items-center gap-3 pt-2 sm:pt-0">
            <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F0F0F]">20K+</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight max-w-[55px]">Happy Customers</span>
          </div>
          <div className="sm:px-6 flex items-center gap-3 pt-2 sm:pt-0">
            <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F0F0F]">150K+</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight max-w-[55px]">Property Listed</span>
          </div>
          <div className="sm:px-6 last:pr-0 flex items-center gap-3 pt-2 sm:pt-0">
            <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F0F0F]">8-12%</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight max-w-[65px]">Average Return Value</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ValueSection() {
  return (
    <section className="bg-white py-16 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Text + Button (Takes ~7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-7 text-left"
          >
            <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#FF5F57] mb-3">
              - Reason to choose us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.15] tracking-tight text-[#0F0F0F] max-w-xl">
              Discover the value behind smart property investments
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-[16px] leading-relaxed text-slate-500 max-w-md">
              We handle the heavy lifting by conducting in-depth research, analyzing the numbers, and finding high-performing properties for you.
            </p>
            <div className="mt-6 sm:mt-8">
              <motion.a
                href="#properties"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#0F0F0F] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:bg-slate-800 transition-colors"
              >
                Find the best for you <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Bento Cards (Takes ~5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {/* Card 1: Smart Suggestions */}
            <div className="rounded-[24px] bg-slate-50 p-5 sm:p-6 border border-slate-100 flex flex-col justify-between shadow-sm">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-sm border border-slate-200 text-slate-400 text-[11px] font-medium w-fit">
                <Search className="h-3.5 w-3.5 text-slate-400" />
                <span>search in...</span>
              </div>
              <div>
                <h3 className="text-[15px] sm:text-[16px] font-bold text-slate-900">Smart Suggestions</h3>
                <p className="mt-1 text-[12px] sm:text-[13px] text-slate-500 leading-snug">
                  AI scans listings to find your best-fit property.
                </p>
              </div>
            </div>

            {/* Card 2: 99% Trusted Investor */}
            <div className="rounded-[24px] bg-slate-50 p-5 sm:p-6 border border-slate-100 flex flex-col justify-between shadow-sm">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#0F0F0F] text-white mb-5 sm:mb-6 shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-[15px] sm:text-[16px] font-bold text-slate-900">99% Trusted Investor</h3>
                <p className="mt-1 text-[12px] sm:text-[13px] text-slate-500 leading-snug">
                  Users trust our picks and return for more deals.
                </p>
              </div>
            </div>

            {/* Card 3: Invest Where it Matters (Full Width in Bento Grid) */}
            <div className="sm:col-span-2 rounded-[24px] bg-slate-50 p-5 sm:p-6 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
              <div className="max-w-full sm:max-w-[200px] text-left">
                <h3 className="text-[15px] sm:text-[16px] font-bold text-slate-900">Invest Where it Matters</h3>
                <p className="mt-1 text-[12px] sm:text-[13px] text-slate-500 leading-snug">
                  We pinpoint high-demand, high-growth areas backed by market data.
                </p>
              </div>
              
              {/* Overlapping Map Mini-graphic & Card stack */}
              <div className="relative h-28 w-40 flex items-center justify-center shrink-0">
                {/* Background dot-grid map representation */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:8px_8px] rounded-xl" />
                
                {/* Floating pin badge */}
                <div className="absolute top-2 left-6 z-10 flex items-center gap-1 rounded-full bg-[#FF5F57] text-white px-2 py-0.5 text-[10px] font-bold shadow-md">
                  <MapPin className="h-3 w-3" /> $14B
                </div>

                {/* Stacked property card preview */}
                <div className="absolute bottom-1 right-1 w-28 h-20 rounded-lg overflow-hidden border-2 border-white shadow-lg bg-white rotate-3">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80"
                    alt="Property preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function RealEstateLanding() {
  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <Hero />
      <StatsSection />
      <ValueSection />
    </main>
  )
}