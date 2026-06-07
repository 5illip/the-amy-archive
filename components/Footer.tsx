import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream px-6 md:px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase">
          The Amy Archive
        </p>
        <nav className="flex gap-8">
          {['Archive', 'Shop', 'About', 'Contact'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="font-sans text-[11px] tracking-[0.15em] uppercase opacity-35 hover:opacity-100 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="font-sans text-[10px] opacity-20 tracking-wide">
          Objects with a past.
        </p>
      </div>
    </footer>
  )
}
