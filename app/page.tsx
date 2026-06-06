import Link from 'next/link'

const preview = [
  {
    id: 1,
    title: 'No. 01 — Wide Brim Brooch Hat',
    category: 'Hats',
    bg: '#2C3D2E',
    span: 'col-span-2 row-span-2',
    aspect: 'aspect-[2/3]',
  },
  {
    id: 2,
    title: 'No. 02 — Archive Tote',
    category: 'Bags',
    bg: '#7A2733',
    span: 'col-span-1',
    aspect: 'aspect-square',
  },
  {
    id: 3,
    title: 'No. 03 — Brocade Jacket',
    category: 'Jackets',
    bg: '#C4774A',
    span: 'col-span-1',
    aspect: 'aspect-square',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen bg-ink flex flex-col items-center justify-center text-cream overflow-hidden">
        <div className="text-center px-6 relative z-10">
          <p className="font-sans text-xs tracking-[0.35em] uppercase mb-10 opacity-40">
            Est. in devotion to the found
          </p>
          <h1 className="font-serif font-light text-[clamp(5rem,14vw,14rem)] leading-[0.9] tracking-tight mb-10">
            The Amy<br />Archive
          </h1>
          <div className="w-px h-14 bg-cream/20 mx-auto mb-8" />
          <p className="font-serif italic text-[clamp(1rem,2.5vw,1.5rem)] tracking-wide opacity-60">
            Objects with a past. Worn with intention.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Archive</span>
          <div className="w-px h-10 bg-cream" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-serif font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1]">
              Not just objects.<br />
              <em>Investments<br />in feeling.</em>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-sans font-light text-base leading-relaxed opacity-70">
              Something that comes from the past makes you feel more invested in
              what you carry forward. Each piece in the Amy Archive is sourced
              for its history, elevated through quality, and worn as a
              declaration of knowing exactly who you are.
            </p>
            <p className="font-sans font-light text-base leading-relaxed opacity-70">
              Hats adorned with brooches. Bags with memory. Sweaters, jackets,
              jeans — all carrying the weight of a life well lived before yours.
              Unisex. Ageless. Uncompromising.
            </p>
            <Link
              href="/archive"
              className="inline-flex items-center gap-4 font-sans text-xs tracking-[0.2em] uppercase border-b border-ink pb-1 hover:opacity-40 transition-opacity mt-2"
            >
              View the Archive
              <span className="text-[10px]">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="bg-parchment py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase opacity-40 mb-10">
            From the Archive
          </p>

          {/* Editorial asymmetric grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {/* Large left piece */}
            <Link href="/archive" className="col-span-3 md:col-span-2 group">
              <div
                className="w-full aspect-[3/4] md:aspect-[4/5] relative overflow-hidden"
                style={{ backgroundColor: preview[0].bg }}
              >
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-1">
                    {preview[0].category}
                  </p>
                  <p className="font-serif text-cream/70 text-lg">
                    {preview[0].title}
                  </p>
                </div>
              </div>
            </Link>

            {/* Two stacked right pieces */}
            <div className="col-span-3 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
              {preview.slice(1).map((piece) => (
                <Link href="/archive" key={piece.id} className="group">
                  <div
                    className="w-full aspect-square relative overflow-hidden"
                    style={{ backgroundColor: piece.bg }}
                  >
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700" />
                    <div className="absolute bottom-4 left-4">
                      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-1">
                        {piece.category}
                      </p>
                      <p className="font-serif text-cream/70 text-sm">
                        {piece.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/archive"
              className="inline-flex items-center gap-4 font-sans text-xs tracking-[0.2em] uppercase border border-ink px-10 py-4 hover:bg-ink hover:text-cream transition-colors duration-400"
            >
              Enter the Archive
            </Link>
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="bg-wine text-cream py-28 md:py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif italic font-light text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.4] mb-12">
            &ldquo;Old stuff is made so much better. Quality from the past makes you
            feel more invested in the pieces you carry forward.&rdquo;
          </p>
          <div className="w-8 h-px bg-cream/30 mx-auto mb-6" />
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase opacity-50">
            Amy
          </p>
        </div>
      </section>
    </>
  )
}
