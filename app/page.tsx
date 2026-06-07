import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero — brand name over image */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/archive-01.jpg"
          alt="The Amy Archive"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-cream text-center px-6">
          <p className="font-sans text-[9px] tracking-[0.45em] uppercase opacity-50 mb-8">
            Est. in devotion to the found
          </p>
          <h1 className="font-serif font-light text-[clamp(4rem,11vw,10rem)] leading-[0.95] tracking-tight mb-8">
            The Amy<br />Archive
          </h1>
          <div className="w-8 h-px bg-cream/30 mb-7" />
          <p className="font-serif italic font-light text-[clamp(0.95rem,2vw,1.25rem)] opacity-60 tracking-wide">
            Objects with a past. Worn with intention.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-px h-10 bg-cream/20" />
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-white px-6 md:px-16 py-24 md:py-36 border-b border-ink/[0.06]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <h2 className="font-serif font-light text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.15]">
              Not just objects.<br />
              <em>Investments<br />in feeling.</em>
            </h2>
          </div>
          <div className="space-y-6 font-sans font-light text-sm leading-[1.95] text-ink/60 md:pt-2">
            <p>
              Old things are made better. Not out of nostalgia — out of
              honesty. The weight of a real material. The craft of a time when
              things were built to last. The particular warmth of something
              that has already lived a life before yours.
            </p>
            <p>
              The Amy Archive exists at the intersection of history and
              intention. Hats covered in found brooches. Jackets that carry
              their miles. Bags with memory. Each piece is sourced, elevated,
              and offered to someone confident enough to wear it.
            </p>
            <p>
              This is not thrift. This is curation. Every object in the archive
              has been chosen for what it carries — and what it will mean to
              the person who wears it next.
            </p>
            <div className="pt-4">
              <Link
                href="/archive"
                className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase border-b border-ink pb-0.5 hover:opacity-40 transition-opacity"
              >
                Enter the Archive
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white px-6 md:px-16 py-24 md:py-32 border-b border-ink/[0.06]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[9px] tracking-[0.45em] uppercase text-ink/30 mb-12">
            The Amy Archive is for
          </p>
          <p className="font-serif italic font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1.3] text-ink/85">
            The confident.<br />
            The ageless.<br />
            The unisex.
          </p>
          <p className="font-sans font-light text-sm leading-[1.8] text-ink/45 mt-10 max-w-sm mx-auto">
            They appreciate beauty. They are not following a trend —
            they are the ones other people point to.
          </p>
        </div>
      </section>

      {/* Amy's voice */}
      <section className="bg-[#FAF8F5] border-t border-ink/[0.06] px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif italic font-light text-[clamp(1.2rem,2.5vw,1.75rem)] leading-[1.75] text-ink/75">
            &ldquo;Old stuff is made so much better. Quality from the past makes
            you feel more invested in the pieces you carry forward.&rdquo;
          </p>
          <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-ink/30 mt-8">
            — Amy
          </p>
        </div>
      </section>
    </>
  )
}
