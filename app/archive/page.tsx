import Image from 'next/image'

export const metadata = {
  title: 'Archive — The Amy Archive',
}

const pieces = [
  {
    id: 1,
    number: '01',
    title: 'Leopard Brooch Cap',
    category: 'Hats',
    bg: '#2C3D2E',
    aspect: '4/3',
    image: '/images/archive-01.jpg',
  },
  {
    id: 2,
    number: '02',
    title: 'Archive Tote',
    category: 'Bags',
    bg: '#7A2733',
    aspect: '4/3',
  },
  {
    id: 3,
    number: '03',
    title: 'Vintage Cable Knit',
    category: 'Sweaters',
    bg: '#8B7355',
    aspect: '3/4',
  },
  {
    id: 4,
    number: '04',
    title: 'Brocade Jacket',
    category: 'Jackets',
    bg: '#1A1410',
    aspect: '3/4',
  },
  {
    id: 5,
    number: '05',
    title: 'Pillbox Brooch Hat',
    category: 'Hats',
    bg: '#C4774A',
    aspect: '4/3',
  },
  {
    id: 6,
    number: '06',
    title: 'High-Rise Vintage Denim',
    category: 'Jeans',
    bg: '#3D5A7A',
    aspect: '3/4',
  },
  {
    id: 7,
    number: '07',
    title: 'Structured Brooch Cloche',
    category: 'Hats',
    bg: '#4A3728',
    aspect: '4/3',
  },
  {
    id: 8,
    number: '08',
    title: 'Velvet Evening Bag',
    category: 'Bags',
    bg: '#2C3D2E',
    aspect: '3/4',
  },
  {
    id: 9,
    number: '09',
    title: 'Wool Bouclé Jacket',
    category: 'Jackets',
    bg: '#C4A96A',
    aspect: '4/3',
  },
]

export default function Archive() {
  return (
    <div className="pt-24 min-h-screen bg-cream">
      <div className="px-6 md:px-12 pb-12 pt-12 border-b border-ink/10">
        <div className="max-w-6xl mx-auto flex items-end justify-between">
          <div>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase opacity-40 mb-3">
              The Collection
            </p>
            <h1 className="font-serif font-light text-[clamp(3.5rem,8vw,8rem)] leading-none">
              Archive
            </h1>
          </div>
          <p className="font-sans text-xs tracking-[0.15em] uppercase opacity-30 pb-3">
            {pieces.length} Pieces
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {pieces.map((piece) => (
            <div key={piece.id} className="break-inside-avoid group cursor-pointer">
              <div
                className="w-full relative overflow-hidden"
                style={{ aspectRatio: piece.aspect, backgroundColor: piece.bg }}
              >
                {'image' in piece && piece.image && (
                  <Image
                    src={piece.image as string}
                    alt={piece.title}
                    fill
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream/30">
                    No. {piece.number}
                  </span>
                </div>
              </div>
              <div className="pt-3 pb-1">
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-40 mb-1">
                  {piece.category}
                </p>
                <p className="font-serif text-lg font-light">{piece.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
