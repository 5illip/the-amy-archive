import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'

export const metadata = {
  title: 'Shop — The Amy Archive',
}

export default function Shop() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="px-6 md:px-16 py-10 border-b border-ink/[0.06]">
        <div className="flex items-baseline justify-between">
          <div>
            <h1 className="font-serif font-light text-[clamp(2.5rem,5vw,4rem)]">Shop</h1>
            <p className="font-sans font-light text-sm text-ink/45 mt-2 max-w-md">
              Every piece is one of one. When it&apos;s gone, it&apos;s gone —
              inquire and it&apos;s yours to consider.
            </p>
          </div>
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ink/30 hidden md:block">
            {products.length} available
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-x-6 md:gap-y-12">
          {products.map((product) => (
            <Link href={`/shop/${product.slug}`} key={product.slug} className="group">
              <div
                className="relative w-full aspect-[3/4] overflow-hidden mb-3"
                style={{ backgroundColor: product.bg }}
              >
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                )}
              </div>
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-ink/35 mb-1">
                {product.category}
              </p>
              <div className="flex items-baseline justify-between">
                <p className="font-serif font-light text-[1.05rem]">{product.title}</p>
                <p className="font-sans text-sm text-ink/50">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
