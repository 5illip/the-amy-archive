export const metadata = {
  title: 'About — The Amy Archive',
}

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-cream">
      {/* Hero image area */}
      <div className="relative h-[65vh] bg-ink overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream/20">
            Photography
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </div>

      <div className="px-6 md:px-12 py-20">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase opacity-40 mb-5">
            About
          </p>
          <h1 className="font-serif font-light text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] mb-16">
            Amy &<br />
            <em>The Archive</em>
          </h1>

          <div className="space-y-7 font-sans font-light text-base leading-[1.8] opacity-70">
            <p>
              The Amy Archive started with a belief: old stuff is made so much
              better. The quality of a vintage brooch, the weight of a
              well-worn jacket, the particular shape of a hat that has been
              somewhere — these things carry meaning that new objects simply
              haven&apos;t earned yet.
            </p>
            <p>
              Each piece is sourced with intention. Thrifted, inherited,
              discovered at the edges of estate sales and quiet markets — then
              elevated, considered, and made ready to be part of someone&apos;s life
              again. It started with hats, each one adorned with found brooches.
              Now the archive includes bags, sweaters, jackets, and jeans.
            </p>
            <p>
              The person who wears the Amy Archive is confident. They appreciate
              beauty. They are not following a trend — they are the ones other
              people point to. Unisex. Ageless. Entirely themselves.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-ink/10">
            <p className="font-serif italic font-light text-[clamp(1.3rem,3vw,2rem)] leading-[1.5]">
              &ldquo;Something that comes from the past makes you feel more invested
              in the pieces you carry forward.&rdquo;
            </p>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40 mt-6">
              — Amy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
