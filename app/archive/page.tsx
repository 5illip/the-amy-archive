import Image from 'next/image'

export const metadata = {
  title: 'Archive — The Amy Archive',
}

type Piece = {
  id: number
  number: string
  title: string
  category: string
  bg: string
  image?: string
}

const pieces: Piece[] = [
  {
    id: 1,
    number: '01',
    title: 'Leopard Brooch Cap',
    category: 'Hats',
    bg: '#2C3D2E',
    image: '/images/archive-01.jpg',
  },
  { id: 2, number: '02', title: 'Archive Tote', category: 'Bags', bg: '#7A2733' },
  { id: 3, number: '03', title: 'Vintage Cable Knit', category: 'Sweaters', bg: '#8B7355' },
  { id: 4, number: '04', title: 'Brocade Jacket', category: 'Jackets', bg: '#1A1410' },
  { id: 5, number: '05', title: 'Pillbox Brooch Hat', category: 'Hats', bg: '#C4774A' },
  { id: 6, number: '06', title: 'High-Rise Vintage Denim', category: 'Jeans', bg: '#3D5A7A' },
  { id: 7, number: '07', title: 'Structured Cloche', category: 'Hats', bg: '#4A3728' },
  { id: 8, number: '08', title: 'Velvet Evening Bag', category: 'Bags', bg: '#2C3D2E' },
  { id: 9, number: '09', title: 'Wool Bouclé Jacket', category: 'Jackets', bg: '#C4A96A' },
]

export default function Archive() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="px-6 md:px-16 py-10 border-b border-ink/[0.06]">
        <div className="flex items-baseline justify-between">
          <h1 className="font-serif font-light text-[clamp(2.5rem,5vw,4rem)]">Archive</h1>
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ink/30">
            {pieces.length} pieces
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-x-6 md:gap-y-12">
          {pieces.map((piece) => (
            <div key={piece.id} className="group cursor-pointer">
              <div
                className="relative w-full aspect-[3/4] overflow-hidden mb-3"
                style={{ backgroundColor: piece.bg }}
              >
                {piece.image && (
                  <Image
                    src={piece.image}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
