'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }
    setScrolled(false)

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.75)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream text-ink border-b border-ink/10'
          : 'bg-transparent text-cream'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        <Link
          href="/"
          className="font-sans text-xs tracking-[0.25em] uppercase"
        >
          The Amy Archive
        </Link>
        <div className="flex gap-6 md:gap-10">
          <Link
            href="/archive"
            className="font-sans text-xs tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
          >
            Archive
          </Link>
          <Link
            href="/about"
            className="font-sans text-xs tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-sans text-xs tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
