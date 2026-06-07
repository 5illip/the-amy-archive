'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(!isHome)

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }
    setScrolled(false)
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white border-b border-ink/[0.06]' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link
          href="/"
          className={`font-sans text-[11px] tracking-[0.3em] uppercase transition-colors duration-500 ${
            scrolled ? 'text-ink' : 'text-cream'
          }`}
        >
          The Amy Archive
        </Link>
        <div className="flex gap-8">
          {['Archive', 'Shop', 'About', 'Contact'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className={`font-sans text-[11px] tracking-[0.2em] uppercase hover:opacity-40 transition-all duration-500 ${
                scrolled ? 'text-ink' : 'text-cream'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
