import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { products, getProductBySlug } from '@/lib/products'

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return { title: `${product.title} — The Amy Archive` }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const subject = encodeURIComponent(`Inquiry: ${product.title} (No. ${product.number})`)
  const body = encodeURIComponent(
    `Hi Amy,\n\nI'd like to inquire about the ${product.title} (No. ${product.number}, $${product.price}).\n\n`
  )

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="px-6 md:px-16 pt-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-ink/40 hover:text-ink transition-colors"
        >
          ← Back to Shop
        </Link>
      </div>

      <div className="px-6 md:px-16 py-10 md:py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Image */}
          <div
            className="relative w-full aspect-[3/4] overflow-hidden"
            style={{ backgroundColor: product.bg }}
          >
            {product.image && (
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            )}
            <div className="absolute top-4 left-4">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream/50">
                No. {product.number}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="md:pt-2">
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ink/35 mb-3">
              {product.category} — One of One
            </p>
            <h1 className="font-serif font-light text-[clamp(2.2rem,4.5vw,3.2rem)] leading-[1.1] mb-4">
              {product.title}
            </h1>
            <p className="font-sans text-xl text-ink/70 mb-10">${product.price}</p>

            <p className="font-sans font-light text-sm leading-[1.9] text-ink/60 mb-10 max-w-md">
              {product.description}
            </p>

            <ul className="space-y-2 mb-12">
              {product.details.map((detail) => (
                <li
                  key={detail}
                  className="font-sans font-light text-sm text-ink/50 leading-relaxed flex gap-3"
                >
                  <span className="text-ink/25">—</span>
                  {detail}
                </li>
              ))}
            </ul>

            <a
              href={`mailto:hello@theamyarchive.com?subject=${subject}&body=${body}`}
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.2em] uppercase border border-ink px-10 py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
            >
              Inquire About This Piece
            </a>

            <p className="font-sans font-light text-xs leading-relaxed text-ink/35 mt-6 max-w-sm">
              Each piece in the archive is singular. Inquiries are answered
              directly by Amy, usually within a day or two.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
