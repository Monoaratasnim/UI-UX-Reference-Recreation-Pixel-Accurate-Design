import { MotionConfig, motion } from "framer-motion"
import { useState } from "react"
import {
  ChevronDown,
  Flag,
  MapPin,
  Phone,
  Rabbit,
  Shield,
  ShieldCheck,
  Star,
  User,
  X,
} from "lucide-react"

const EASE = [0.16, 1, 0.3, 1]

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
}

const stops = [
  {
    label: "Pickup",
    title: "Main Street Bus Stop",
    time: "08:15 AM",
    aux: "(in 5 mins)",
    tone: "pickup",
  },
  {
    label: "Passenger 2",
    title: "Oakwood Apartments",
    time: "08:20 AM",
    tone: "mid",
  },
  {
    label: "Passenger 3",
    title: "Central Mall Entrance B",
    time: "08:25 AM",
    tone: "mid",
  },
  {
    label: "Dropoff",
    title: "Tech Park, Building A",
    time: "08:40 AM",
    aux: "(Estimated arrival)",
    tone: "dropoff",
  },
]

const routeStops = [
  { title: "Main Street Bus Stop", time: "08:15 AM", x: 90, y: 640 },
  { title: "Oakwood Apartments", time: "08:20 AM", x: 300, y: 500 },
  { title: "Central Mall Entrance B", time: "08:25 AM", x: 520, y: 300 },
  { title: "Tech Park, Building A", time: "08:40 AM", x: 690, y: 120 },
]

const ROUTE_PATH =
  "M90 640 C 190 618, 225 545, 300 500 C 365 461, 440 380, 520 300 C 582 237, 640 180, 690 120"

function Brand() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
        <Rabbit className="h-5 w-5" fill="currentColor" />
      </span>
      <span className="text-[22px] font-bold tracking-tight text-slate-900">
        HoPon
      </span>
    </div>
  )
}

function DesktopNav() {
  const links = [
    { label: "Discover", active: true },
    { label: "My Rides", active: false },
    { label: "Messages", active: false },
  ]
  return (
    <motion.header
      variants={item}
      className="sticky top-0 z-30 border-b border-slate-100 bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-6 px-6">
        <Brand />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`relative text-[14px] font-medium transition-colors ${
                link.active ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
              {link.active && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-1 left-0 right-0 mx-auto h-1.5 w-1.5 rounded-full bg-emerald-500"
                />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden items-center gap-2.5 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-3 shadow-sm sm:flex"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-[11px] font-bold text-white">
              AK
            </span>
            <span className="text-[13px] font-medium text-ink">Alex Kane</span>
            <ChevronDown className="h-3.5 w-3.5 text-muted" strokeWidth={2.4} />
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

function MobileHeader() {
  return (
    <motion.header variants={item}>
      <div className="flex items-center justify-between px-0.5">
        <Brand />
        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: "#e2e8f0" }}
          whileTap={{ scale: 0.86, rotate: 90 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          aria-label="Close"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-soft text-slate-900 shadow-sm"
        >
          <X className="h-5 w-5" strokeWidth={2.4} />
        </motion.button>
      </div>
    </motion.header>
  )
}

function DriverCard() {
  return (
    <motion.section
      variants={item}
      className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-500">
            <User className="h-5 w-5" strokeWidth={2} />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-[17px] font-bold tracking-tight text-slate-900">
              Lara Larsson
            </h2>
            <span className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-slate-500">
              <Star className="h-3.5 w-3.5 fill-blue-500 text-blue-500" />
              4.9 (120 rides)
            </span>
          </div>
        </div>

        <div className="flex shrink-0 flex-col justify-center gap-0.5 text-right">
          <p className="text-sm font-normal leading-snug text-slate-500">
            Tesla Model X • Gray
          </p>
          <p className="text-sm font-semibold leading-snug text-slate-900">
            Plate: ABC 432 KJ
          </p>
        </div>
      </div>

      <div className="mt-3.5 flex items-center gap-2 border-t border-slate-100 pt-3.5">
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[12px] font-bold text-blue-700"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-blue-600" strokeWidth={2.4} />
          Verified ID
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[12px] font-bold text-emerald-700"
        >
          <Shield className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.4} />
          Safe Driver
        </motion.span>
      </div>
    </motion.section>
  )
}

function TripInfo() {
  return (
    <motion.section variants={item}>
      <h3 className="text-[17px] font-medium tracking-tight text-ink">
        Trip Info
      </h3>

      <div className="relative mt-2">
        <div className="absolute bottom-6 top-6 left-[14px] w-[2px] rounded-full bg-gradient-to-b from-blue-500/60 via-slate-200 to-slate-200" />
        <ol className="relative flex flex-col">
          {stops.map((stop) => {
            const isStart = stop.tone === "pickup"
            const isEnd = stop.tone === "dropoff"
            return (
              <motion.li
                key={stop.title}
                variants={item}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="flex items-center justify-between gap-4 rounded-xl pb-6 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <span
                    className={`flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full ${
                      isStart
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/40 ring-4 ring-blue-100"
                        : isEnd
                          ? "bg-slate-900 text-white ring-4 ring-slate-100"
                          : "border-2 border-slate-200 bg-slate-50 text-slate-300"
                    }`}
                  >
                    <MapPin className="h-3.5 w-3.5" strokeWidth={2.6} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {stop.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-semibold tracking-tight text-slate-900">
                      {stop.title}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-bold tracking-tight text-slate-900">
                    {stop.time}
                  </p>
                  {stop.aux && (
                    <p
                      className={`mt-0.5 text-[11.5px] font-semibold ${
                        isStart ? "text-emerald-600" : "text-slate-400"
                      }`}
                    >
                      {stop.aux}
                    </p>
                  )}
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </motion.section>
  )
}

function FareSplit() {
  return (
    <motion.section variants={item}>
      <div className="relative overflow-hidden rounded-2xl border border-emerald-100/50 bg-gradient-to-b from-emerald-50/80 to-white px-5 py-6">
        <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-emerald-400/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-14 -left-6 h-28 w-28 rounded-full bg-teal-300/20 blur-2xl" />

        <div className="relative flex flex-col items-center justify-center gap-2.5 text-center">
          <p className="text-[13px] font-medium text-slate-400">Fare Split</p>
          <p className="text-[26px] font-bold tracking-tight text-slate-900">
            $4.20 <span className="text-[16px] font-medium">/seat</span>
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-[13px] font-bold text-slate-700 shadow-sm">
            × 3 riders
          </span>
        </div>
      </div>
    </motion.section>
  )
}

function Reminder() {
  const [on, setOn] = useState(false)
  return (
    <motion.section
      variants={item}
      className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
    >
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-medium tracking-tight text-slate-900">
          Set Reminder
        </p>
        <p className="mt-1 text-[13px] leading-snug text-slate-400">
          Get notified 10 minutes before pickup so you're ready on time.
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOn((v) => !v)}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        aria-pressed={on}
        className={`shrink-0 rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors ${
          on
            ? "bg-emerald-500 text-white hover:bg-emerald-600"
            : "bg-slate-100 text-slate-900 hover:bg-slate-200"
        }`}
      >
        {on ? "Set ✓" : "Set"}
      </motion.button>
    </motion.section>
  )
}

function ActionButtons() {
  return (
    <div className="flex items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        aria-label="Call driver"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900 shadow-sm transition-colors hover:bg-slate-200"
      >
        <Phone className="h-5.5 w-5.5" strokeWidth={2.2} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#191C21] text-[16px] font-medium tracking-tight text-white shadow-lg shadow-slate-900/20 transition-colors hover:bg-slate-800"
      >
        Join Ride
      </motion.button>
    </div>
  )
}

function MapIllustration() {
  return (
    <div
      className="map-dim relative h-[360px] w-full overflow-hidden lg:h-[460px]"
      aria-label="Interactive route map"
    >
      <div className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-[45%] bg-emerald-200/60 blur-sm" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-[45%] bg-sky-200/70 blur-sm" />
      <div className="pointer-events-none absolute left-[58%] top-[6%] h-40 w-44 rotate-[-8deg] rounded-[55%] bg-emerald-100/70" />

      <div className="pointer-events-none absolute left-[-60px] top-[30%] h-3.5 w-[280px] rotate-[8deg] rounded-full border border-black/5 bg-white/90" />
      <div className="pointer-events-none absolute left-[30%] top-[-30px] h-3 w-[360px] rotate-[24deg] rounded-full border border-black/5 bg-white/90" />
      <div className="pointer-events-none absolute bottom-[12%] right-[-80px] h-2.5 w-[300px] rotate-[-12deg] rounded-full border border-black/5 bg-white/90" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={ROUTE_PATH}
          fill="none"
          stroke="#d7ded9"
          strokeWidth={18}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d={ROUTE_PATH}
          fill="none"
          stroke="#10b981"
          strokeWidth={6.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1 14"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
        />
      </svg>

      {routeStops.map((stop, i) => {
        const last = i === routeStops.length - 1
        return (
          <motion.div
            key={stop.title}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.5 + i * 0.18 }}
            className="absolute"
            style={{
              left: `${stop.x / 8}%`,
              top: `${stop.y / 8}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`relative flex h-9 w-9 items-center justify-center rounded-full shadow-lg ring-4 ring-white ${
                i === 0
                  ? "bg-emerald-500 text-white"
                  : last
                    ? "bg-ink text-white"
                    : "border border-black/10 bg-white text-gray-500"
              }`}
            >
              {i === 0 && (
                <motion.span
                  className="absolute inset-0 -m-1 rounded-full bg-emerald-400"
                  animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              <MapPin className="h-4 w-4" strokeWidth={2.4} />
            </div>
          </motion.div>
        )
      })}

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
        className="absolute left-5 top-5 hidden items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-md ring-1 ring-slate-200/80 backdrop-blur sm:flex"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
            Live ride
          </p>
          <p className="text-[13px] font-bold text-ink">Pickup at 08:15 AM</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5, ease: EASE }}
        className="absolute right-5 top-5 hidden items-center gap-2 rounded-2xl bg-ink/90 px-4 py-3 text-white shadow-md backdrop-blur sm:flex"
      >
        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
          ETA
        </span>
        <span className="text-[13px] font-bold">08:40 AM</span>
      </motion.div>
    </div>
  )
}

function OverviewCard() {
  const stats = [
    { label: "Departure", value: "08:15 AM" },
    { label: "Duration", value: "25 min" },
    { label: "Distance", value: "18 mi" },
  ]
  return (
    <motion.section
      variants={item}
      className="overflow-hidden rounded-[28px] bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-100"
    >
      <div className="flex flex-col gap-5 p-6 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-[22px] font-medium tracking-tight text-ink">
            Trip Overview
          </h1>
          <p className="mt-1 text-[13px] font-medium text-muted">
            HoPon shared ride • 4 stops
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ink">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                <MapPin className="h-3 w-3" strokeWidth={2.6} />
              </span>
              Main Street Bus Stop
            </span>
            <span className="h-px w-5 bg-slate-300" />
            <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ink">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-white">
                <Flag className="h-3 w-3" strokeWidth={2.6} />
              </span>
              Tech Park, Building A
            </span>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-2 text-[12px] font-bold text-emerald-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Active
        </span>
      </div>

      <div className="px-6">
        <MapIllustration />
      </div>

      <div className="grid grid-cols-3 divide-x divide-slate-100">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              {stat.label}
            </p>
            <p className="mt-1 text-[17px] font-bold tracking-tight text-ink">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

function DetailsCard() {
  return (
    <motion.div
      variants={item}
      className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-100"
    >
      <div className="flex items-center justify-between px-6 pb-1 pt-6 sm:px-7">
        <h2 className="text-[22px] font-medium tracking-tight text-ink">
          Trip Details
        </h2>
        <span className="rounded-full bg-soft px-3 py-1.5 text-[12px] font-semibold text-muted">
          Ride #{String(48219).padStart(6, "0")}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-2 sm:px-7">
        <div className="flex flex-col gap-5">
          <DriverCard />
          <TripInfo />
          <FareSplit />
          <Reminder />
          <p className="flex items-center gap-1.5 text-[12px] font-medium text-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            Flexible cancellation up to 15 minutes before pickup.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-100 px-6 py-5 sm:px-7">
        <ActionButtons />
      </div>
    </motion.div>
  )
}

function MobileActionBar() {
  return (
    <motion.div
      variants={item}
      className="sticky bottom-0 z-20 mt-auto -mx-4 pb-10 pt-4"
    >
      <div className="rounded-3xl bg-white/95 px-4 py-4 shadow-elevated ring-1 ring-slate-100 backdrop-blur-md">
        <ActionButtons />
      </div>
    </motion.div>
  )
}

function MobilePage() {
  return (
    <div className="min-h-dvh w-full bg-white md:hidden">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-4 pb-4 pt-6">
        <motion.div
          variants={list}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4"
        >
          <MobileHeader />
          <DriverCard />
          <TripInfo />
          <FareSplit />
          <Reminder />
          <MobileActionBar />
        </motion.div>
      </div>
    </div>
  )
}

function DesktopPage() {
  return (
    <div className="hidden min-h-dvh w-full bg-slate-100 md:flex md:flex-col">
      <DesktopNav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8 lg:grid lg:grid-cols-[1fr_420px] lg:gap-8">
        <motion.div
          variants={list}
          initial="hidden"
          animate="show"
          className="w-full min-w-0"
        >
          <OverviewCard />
        </motion.div>
        <motion.div
          variants={list}
          initial="hidden"
          animate="show"
          className="mt-8 w-full min-w-0 lg:mt-0"
        >
          <DetailsCard />
        </motion.div>
      </main>
    </div>
  )
}

export default function RideTripDetails() {
  return (
    <MotionConfig reducedMotion="user">
      <MobilePage />
      <DesktopPage />
    </MotionConfig>
  )
}