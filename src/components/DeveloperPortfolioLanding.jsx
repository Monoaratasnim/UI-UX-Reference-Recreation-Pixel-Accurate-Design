import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Sun, Menu, X } from "lucide-react"
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const EASE = [0.16, 1, 0.3, 1]

export default function DeveloperPortfolioLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-dvh w-full bg-white font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white overflow-x-hidden relative">
      
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-12 sm:py-8 relative z-20">
        <div className="flex items-center gap-12">
          <a href="#" className="text-xl font-bold tracking-tight text-zinc-900">
            Stage
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-zinc-500 hover:text-zinc-900 transition-colors">Features</a>
            <a href="#design-system" className="text-zinc-500 hover:text-zinc-900 transition-colors">Design System</a>
            <a href="#documentation" className="text-zinc-500 hover:text-zinc-900 transition-colors">Documentation</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="#contact" 
            className="hidden sm:inline-block rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors"
          >
            Contact
          </a>
          <motion.a
            href="#signup"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:inline-block rounded-lg bg-[#27272a] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3f3f46] transition-colors"
          >
            Sign up
          </motion.a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-200 bg-white px-6 py-6 shadow-lg relative z-30"
          >
            <nav className="flex flex-col gap-4 text-base font-medium">
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-600 hover:text-zinc-950 transition-colors py-1"
              >
                Features
              </a>
              <a 
                href="#design-system" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-600 hover:text-zinc-950 transition-colors py-1"
              >
                Design System
              </a>
              <a 
                href="#documentation" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-600 hover:text-zinc-950 transition-colors py-1"
              >
                Documentation
              </a>
              <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors"
                >
                  Contact
                </a>
                <a 
                  href="#signup" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center rounded-lg bg-[#27272a] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-colors"
                >
                  Sign up
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative mx-auto max-w-7xl px-6 pt-8 pb-20 sm:px-12 sm:pt-16 sm:pb-32 overflow-hidden">
        
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 text-left space-y-8">
            <h1 className="text-3xl sm:text-[42px] lg:text-[48px] font-bold tracking-tight text-zinc-900 leading-[1.15] whitespace-normal sm:whitespace-nowrap">
              API-based developer portfolio, <br className="hidden sm:inline" />
              that converts.
            </h1>

            <p className="text-sm sm:text-[15px] text-zinc-500 max-w-[440px] leading-relaxed">
              Next-gen developer portfolio that helps you showcase your projects, skills, and experience. Personalize it by an evergrowing collection of building blocks and analyse your growth.
            </p>

            {/* Buttons side by side with flex-1 and equal sizing across all devices */}
            <div className="flex flex-row items-stretch gap-3 sm:gap-4 pt-2">
              <motion.a
                href="#get-started"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center rounded-xl bg-[#27272a] px-4 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-medium text-white shadow-md hover:bg-zinc-800 transition-colors text-center"
              >
                Get started
              </motion.a>

              <motion.a
                href="#experience-future"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors text-center"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white">
                  <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                </span>
                <span className="truncate">Experience the future</span>
              </motion.a>
            </div>

            <div className="pt-8 border-t border-zinc-100 mt-12">
              <p className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase mb-5">
                BUILT WITH FEEDBACK FROM AMAZING ENGINEERS AT
              </p>
              
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-zinc-700 font-semibold text-lg">
                <span className="tracking-tight font-bold">Uber</span>
                <span className="tracking-tight font-serif font-bold">Zillow</span>
                <span className="flex items-center gap-1.5 font-bold">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  Airbnb
                </span>
                <span className="tracking-normal font-bold">Google</span>
                <span className="font-semibold">Drupal</span>
                <span className="font-mono font-bold">GO</span>
                <span className="font-bold">Spotify</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-[48px] bg-white p-3.5 shadow-[0_25px_60px_rgba(15,23,42,0.06)] border-[5px] border-zinc-200/60 ring-1 ring-zinc-900/5 z-20"
            >
              <div className="relative overflow-hidden rounded-[36px] bg-white text-zinc-900 p-6 transition-colors min-h-[480px] flex flex-col justify-between border border-zinc-100/80">
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="mx-auto w-28 h-5 bg-zinc-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-zinc-300 mr-2" />
                      <div className="w-10 h-1 bg-zinc-300 rounded-full" />
                    </div>

                    <div className="absolute right-6 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm border border-zinc-200">
                      <Sun className="h-3.5 w-3.5 text-zinc-900" />
                    </div>
                  </div>

                  <div className="mb-4 relative inline-block text-left">
                    <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-md" />
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
                      alt="Developer Avatar"
                      className="relative h-14 w-14 rounded-full object-cover border-2 border-indigo-100 shadow-sm"
                    />
                  </div>

                  <h2 className="text-lg font-bold tracking-tight leading-snug mb-2.5 text-left text-zinc-900 max-w-[240px]">
                    Software designer, founder, and amateur astronaut.
                  </h2>

                  <p className="text-[11px] leading-relaxed text-left text-zinc-500 max-w-[260px]">
                    I'm Felix, a software designer and entrepreneur based in New York City. I'm currently working on a new project called Stage.
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 text-zinc-400 flex items-center justify-start gap-6">
                  <a href="#twitter" className="hover:text-zinc-900 transition-colors">
                    <FaTwitter className="h-3.5 w-3.5" />
                  </a>
                  <a href="#instagram" className="hover:text-zinc-900 transition-colors">
                    <FaInstagram className="h-3.5 w-3.5" />
                  </a>
                  <a href="#github" className="hover:text-zinc-900 transition-colors">
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#linkedin" className="hover:text-zinc-900 transition-colors">
                    <FaLinkedin className="h-3.5 w-3.5" />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </section>

    </main>
  )
}