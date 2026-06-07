import Image from 'next/image'

export const metadata = {
  title: 'About — The Amy Archive',
}

export default function About() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero image */}
      <div className="relative w-full overflow-hidden bg-ink" style={{ height: '60vh' }}>
        <Image
          src="/images/archive-01.jpg"
          alt="The Amy Archive"
          fill
          className="object-cover object-center opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <div className="px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
          <div>
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-4">
              About
            </p>
            <h1 className="font-serif font-light text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1]">
              Amy &<br /><em>The Archive</em>
            </h1>
          </div>

          <div className="space-y-7 font-sans font-light text-sm leading-[1.9] text-ink/60">
            <p>
              The Amy Archive started with a belief: old stuff is made so much
              better. The quality of a vintage brooch, the weight of a well-worn
              jacket, the particular shape of a hat that has been somewhere —
              these things carry meaning that new objects simply haven&apos;t
              earned yet.
            </p>
            <p>
              Each piece is sourced with intention. Thrifted, inherited,
              discovered at the edges of estate sales and quiet markets — then
              elevated, considered, and made ready to be part of someone&apos;s
              life again. It started with hats, each one adorned with found
              brooches. Now the archive includes bags, sweaters, jackets, and
              jeans.
            </p>
            <p>
              The person who wears the Amy Archive is confident. They appreciate
              beauty. They are not following a trend — they are the ones other
              people point to. Unisex. Ageless. Entirely themselves.
            </p>

            <blockquote className="border-l border-ink/15 pl-6 mt-10 pt-1">
              <p className="font-serif italic text-ink/70 text-[1.1rem] leading-[1.7]">
                &ldquo;Something that comes from the past makes you feel more
                invested in the pieces you carry forward.&rdquo;
              </p>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ink/30 mt-4">
                — Amy
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
