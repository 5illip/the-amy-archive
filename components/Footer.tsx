import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-sans text-xs tracking-[0.25em] uppercase">
          The Amy Archive
        </p>
        <nav className="flex gap-8">
          <Link
            href="/archive"
            className="font-sans text-xs tracking-[0.15em] uppercase opacity-40 hover:opacity-100 transition-opacity"
          >
            Archive
          </Link>
          <Link
            href="/about"
            className="font-sans text-xs tracking-[0.15em] uppercase opacity-40 hover:opacity-100 transition-opacity"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-sans text-xs tracking-[0.15em] uppercase opacity-40 hover:opacity-100 transition-opacity"
          >
            Contact
          </Link>
        </nav>
        <p className="font-sans text-xs opacity-25 tracking-wide">
          Objects with a past.
        </p>
      </div>
    </footer>
  )
}
