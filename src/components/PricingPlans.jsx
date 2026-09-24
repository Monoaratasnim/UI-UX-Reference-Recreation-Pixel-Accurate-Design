import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const EASE = [0.16, 1, 0.3, 1]

export default function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <main className="min-h-dvh w-full bg-[#F3F3F5] font-sans text-slate-900 selection:bg-slate-900 selection:text-white overflow-x-hidden">
      
      {/* Top Header Navigation removed (merged into Hero Section for exact badge placement) */}

      {/* Hero Section */}
      <section className="relative mx-auto max-w-5xl px-6 pt-12 sm:pt-16 pb-12 sm:pb-16">
        
        {/* Top Right Call Link */}
        <div className="absolute right-6 top-6 sm:right-12 sm:top-8">
          <motion.a
            href="#schedule"
            whileHover={{ x: 2 }}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900 tracking-tight transition-colors"
          >
            Schedule a <span className="underline underline-offset-4">Call</span> <span className="text-sm">→</span>
          </motion.a>
        </div>

        <div className="text-left pt-6 sm:pt-8">
          
          {/* PRICING Badge positioned above & slightly to the left of 'Better tools' */}
          <div className="mb-4 sm:mb-5">
            <div className="inline-flex items-center rounded-lg border border-slate-300/80 bg-white px-3 py-1.5 text-[11px] font-mono font-bold tracking-widest text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              PRICING
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.035em] leading-[1.2] text-[#8C93A0]">
            
            {/* Line 1 */}
            <span className="block font-semibold">Better tools</span>

            {/* Line 2: smooth + 3 styled badges + workflow */}
            <span className="block flex items-center flex-wrap gap-x-2.5 sm:gap-x-3.5 gap-y-3 mt-1">
              <span className="font-semibold text-[#8C93A0]">smooth</span>
              
              <span className="inline-flex items-center gap-2 align-middle">
                {/* Dribbble Badge */}
                <span className="flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-[14px] bg-[#EA4C89] text-white text-xs sm:text-sm font-bold shadow-[0_4px_12px_rgba(234,76,137,0.35)] -rotate-6">
                  🏀
                </span>
                {/* Behance Badge */}
                <span className="flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-[14px] bg-[#0054FF] text-white text-[11px] sm:text-xs font-extrabold shadow-[0_4px_12px_rgba(0,84,255,0.35)] rotate-6">
                  Be
                </span>
                {/* Custom Badge */}
                <span className="flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-[14px] bg-[#111827] text-white text-[11px] sm:text-xs font-bold shadow-[0_4px_12px_rgba(17,24,39,0.35)] -rotate-6">
                  m
                </span>
              </span>

              <span className="text-[#0B0F19] font-semibold">workflow</span>
            </span>

            {/* Line 3 */}
            <span className="block mt-1 font-semibold text-[#8C93A0]">
              including same great deal,
            </span>

            {/* Line 4: Toggle switch + annually */}
            <span className="flex items-center gap-3.5 flex-wrap mt-2">
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                aria-label="Toggle annual billing"
                className="relative inline-flex h-9 w-16 sm:h-11 sm:w-20 items-center rounded-full p-1 transition-colors shadow-inner cursor-pointer shrink-0"
                style={{
                  background: isAnnual
                    ? "linear-gradient(135deg, #6366F1 0%, #EC4899 50%, #A855F7 100%)"
                    : "#CBD5E1",
                }}
              >
                <motion.span
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white shadow-md"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                </motion.span>
              </button>
              <span className="text-[#0B0F19] font-semibold">annually.</span>
            </span>

          </h1>

        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative flex flex-col justify-between rounded-[36px] bg-white p-8 sm:p-10 shadow-[0_12px_35px_rgba(15,23,42,0.05)] border border-slate-100/80"
          >
            <div>
              {/* Header: Icon + Title & Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[20px] bg-[#0F0F0F] text-white shadow-md shadow-slate-900/15">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-white" aria-hidden="true">
                      <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.8l6.2 6.2L12 18.2 5.8 12 12 5.8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Free</h3>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    $0
                  </span>
                  <span className="text-xs font-semibold text-slate-400">/month</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <motion.a
                  href="#get-started"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="flex w-full items-center justify-center rounded-2xl border border-slate-200/90 bg-white py-3.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  Get Started
                </motion.a>
              </div>

              {/* Feature List */}
              <div className="mt-8 space-y-4 border-t border-slate-100 pt-7">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Nothing but a Hug</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Personal Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative flex flex-col justify-between rounded-[36px] bg-white p-8 sm:p-10 shadow-[0_12px_35px_rgba(15,23,42,0.05)] border border-slate-100/80"
          >
            <div>
              {/* Header: Icon + Title & Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[20px] bg-[#0F0F0F] text-white shadow-md shadow-slate-900/15">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-white" aria-hidden="true">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Personal</h3>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    {isAnnual ? "$69" : "$79"}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">/month</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <motion.a
                  href="#view-pricing"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="flex w-full items-center justify-center rounded-2xl border border-slate-200/90 bg-white py-3.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  View Pricing
                </motion.a>
              </div>

              {/* Feature List */}
              <div className="mt-8 space-y-4 border-t border-slate-100 pt-7">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Full access to tools, 24/7 support</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Monthly updates</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Customization options</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  )
}