export type Product = {
  slug: string
  number: string
  title: string
  category: string
  price: number
  bg: string
  image?: string
  description: string
  details: string[]
}

export const products: Product[] = [
  {
    slug: 'leopard-brooch-cap',
    number: '01',
    title: 'Leopard Brooch Cap',
    category: 'Hats',
    price: 340,
    bg: '#2C3D2E',
    image: '/images/archive-01.jpg',
    description:
      'Found at a quiet estate sale, this leopard print cap was reborn with a constellation of gold-toned brooches — a filigree leaf, a treble clef, a starburst medallion. Each one sourced separately, each one chosen for the way it catches light.',
    details: [
      'One of one',
      'Vintage cotton twill base, hand-adorned with found brooches',
      'Adjustable strap, fits most',
      'Gold-toned hardware, mixed vintage eras',
    ],
  },
  {
    slug: 'archive-tote',
    number: '02',
    title: 'Archive Tote',
    category: 'Bags',
    price: 420,
    bg: '#7A2733',
    description:
      'A structured leather tote with the kind of patina that only comes from being carried, set down, and carried again. Reinforced and relined by hand, ready for its next decade of use.',
    details: [
      'One of one',
      'Full-grain leather, vintage brass hardware',
      'Hand relined interior',
      'Approx. 15"W x 12"H x 5"D',
    ],
  },
  {
    slug: 'vintage-cable-knit',
    number: '03',
    title: 'Vintage Cable Knit',
    category: 'Sweaters',
    price: 280,
    bg: '#8B7355',
    description:
      'A heavyweight wool cable knit with the density and drape that modern mills rarely bother with anymore. Soft from decades of wear, it carries the particular warmth of something well loved before.',
    details: [
      'One of one',
      'Heavyweight vintage wool',
      'Fits oversized — true to vintage sizing',
      'Hand washed and restored',
    ],
  },
  {
    slug: 'brocade-jacket',
    number: '04',
    title: 'Brocade Jacket',
    category: 'Jackets',
    price: 560,
    bg: '#1A1410',
    description:
      'A structured brocade jacket with the kind of weight and tailoring you feel the moment you put it on. The pattern catches differently in every light — gold thread woven through deep, dark fiber.',
    details: [
      'One of one',
      'Vintage brocade with gold thread detail',
      'Fully lined, structured shoulder',
      'Tailored fit — runs true to size',
    ],
  },
  {
    slug: 'pillbox-brooch-hat',
    number: '05',
    title: 'Pillbox Brooch Hat',
    category: 'Hats',
    price: 390,
    bg: '#C4774A',
    description:
      'A classic pillbox silhouette finished with a cluster of found brooches in warm gold and amber tones — the kind of piece that turns heads at a distance and rewards a closer look.',
    details: [
      'One of one',
      'Vintage wool felt base, hand-adorned',
      'Internal comb for secure fit',
      'Mixed-era brooch cluster, gold-toned',
    ],
  },
  {
    slug: 'high-rise-vintage-denim',
    number: '06',
    title: 'High-Rise Vintage Denim',
    category: 'Jeans',
    price: 260,
    bg: '#3D5A7A',
    description:
      'Real vintage denim — the kind with fading you cannot fake and a fit that modern reproductions chase and rarely catch. Broken in by someone else, ready to be broken in by you.',
    details: [
      'One of one',
      'Vintage selvedge denim',
      'High-rise, straight leg',
      'Natural fade and wear throughout',
    ],
  },
  {
    slug: 'structured-cloche',
    number: '07',
    title: 'Structured Cloche',
    category: 'Hats',
    price: 360,
    bg: '#4A3728',
    description:
      'A close-fitting cloche with a single oversized brooch at the brim — quiet until you notice the detail, then impossible to ignore. Built on a structured frame that holds its shape.',
    details: [
      'One of one',
      'Vintage felt, structured frame',
      'Single statement brooch, hand-set',
      'One size — sits close to the head',
    ],
  },
  {
    slug: 'velvet-evening-bag',
    number: '08',
    title: 'Velvet Evening Bag',
    category: 'Bags',
    price: 480,
    bg: '#2C3D2E',
    description:
      'Deep forest velvet with a gold clasp that closes with a satisfying weight. Small enough for an evening, substantial enough to feel like an heirloom the moment you pick it up.',
    details: [
      'One of one',
      'Vintage velvet exterior, satin lining',
      'Gold-toned clasp and chain strap',
      'Approx. 9"W x 6"H',
    ],
  },
  {
    slug: 'wool-boucle-jacket',
    number: '09',
    title: 'Wool Bouclé Jacket',
    category: 'Jackets',
    price: 620,
    bg: '#C4A96A',
    description:
      'A textural bouclé jacket in warm gold — structured, substantial, and built in an era when a jacket was meant to last generations, not seasons. Fully lined and finished by hand.',
    details: [
      'One of one',
      'Vintage wool bouclé, fully lined',
      'Cropped, structured fit',
      'Restored buttons and lining',
    ],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
