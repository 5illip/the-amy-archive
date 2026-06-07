import Link from 'next/link'
import Image from 'next/image'

const preview = [
  {
    id: 1,
    title: 'Leopard Brooch Cap',
    category: 'Hats',
    image: '/images/archive-01.jpg',
    bg: '#2C3D2E',
  },
  { id: 2, title: 'Archive Tote', category: 'Bags', bg: '#7A2733' },
  { id: 3, title: 'Brocade Jacket', category: 'Jackets', bg: '#C4774A' },
]

export default function Home() {
  return (
    <>
      {/* Hero — full screen, image leads */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/archive-01.jpg"
          alt="The Amy Archive"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-cream/40">
            Scroll
          </span>
          <div className="w-px h-10 bg-cream/25" />
        </div>
      </section>

      {/* Brand reveal */}
      <section className="bg-white px-6 md:px-16 py-20 md:py-28 border-b border-ink/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <h1 className="font-serif font-light text-[clamp(3rem,6vw,5.5rem)] leading-[1.05]">
            The Amy<br />Archive
          </h1>
          <div className="md:max-w-[340px] space-y-6 md:pb-1">
            <p className="font-sans font-light text-sm leading-[1.9] text-ink/55">
              Objects with a past, worn with intention. Hats, bags, sweaters,
              jackets, jeans — each piece sourced for its history and elevated
              through quality.
            </p>
            <Link
              href="/archive"
              className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase border-b border-ink pb-0.5 hover:opacity-40 transition-opacity"
            >
              View the Archive
            </Link>
          </div>
        </div>
      </section>

      {/* Archive preview */}
      <section className="bg-white px-6 md:px-16 pt-16 pb-20 md:pt-20 md:pb-28">
        <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-10">
          From the Archive
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {preview.map((piece) => (
            <Link href="/archive" key={piece.id} className="group">
              <div
                className="relative w-full aspect-[3/4] overflow-hidden mb-3"
                style={{ backgroundColor: piece.bg }}
              >
                {'image' in piece && piece.image && (
                  <Image
                    src={piece.image as string}
                    alt={piece.title}
                    fill
                    className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                )}
              </div>
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-ink/35 mb-1">
                {piece.category}
              </p>
              <p className="font-serif font-light text-[1.05rem]">{piece.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-ink/[0.06] flex justify-end">
          <Link
            href="/archive"
            className="font-sans text-[11px] tracking-[0.2em] uppercase hover:opacity-40 transition-opacity"
          >
            Full Archive →
          </Link>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#FAF8F5] border-t border-ink/[0.06] px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-serif italic font-light text-[clamp(1.2rem,2.5vw,1.8rem)] leading-[1.7] text-ink/75">
            &ldquo;Old stuff is made so much better. Quality from the past makes
            you feel more invested in the pieces you carry forward.&rdquo;
          </p>
          <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-ink/30 mt-8">
            Amy
          </p>
        </div>
      </section>
    </>
  )
}
