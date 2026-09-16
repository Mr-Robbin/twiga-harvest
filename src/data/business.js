export const business = {
  name: 'Twiga Harvest',
  email: 'info@twigaharvest.co.tz',
  phone: '0717436153',
  phoneTel: '+255717436153',
  whatsapp: '255717436153',
  poBox: 'P.O. Box 10118',
  address: {
    region: 'Arusha',
    district: 'Arusha CBD',
    ward: 'Moshono',
    street: 'Moshono Shule',
    area: 'Near Shule ya Msingi Moshono',
    full: 'Moshono Shule, near Shule ya Msingi Moshono, Arusha CBD, Arusha, Tanzania',
  },
  tagline: 'Fresh food. Honest harvest. From Arusha to your table.',
  description:
    'Twiga Harvest supplies rice, beans, maize, and other quality food products, plus mixed cereals and agricultural materials — rooted in Tanzania’s harvest and built on trust.',
  activities: [
    {
      title: 'Food Products Retail',
      code: '472119',
      main: true,
      description:
        'Retail sale of quality food products for homes, shops, and local markets across Arusha.',
    },
    {
      title: 'Wholesale of Mixed Cereals',
      code: '462019',
      main: false,
      description:
        'Reliable wholesale supply of mixed cereals for traders, institutions, and distributors.',
    },
    {
      title: 'Agricultural Materials & Feed',
      code: '462099',
      main: false,
      description:
        'Wholesale of raw agricultural materials and animal feed to support farms and agribusiness.',
    },
    {
      title: 'Tours & Experiences',
      code: '791215',
      main: false,
      description:
        'Arranging and assembling tours with transport, accommodation, food, and guide services.',
    },
  ],
}

export const stats = [
  { value: 4, suffix: '+', label: 'Core supply services' },
  { value: 100, suffix: '%', label: 'Focus on quality stock' },
  { value: 24, suffix: '/7', label: 'Order enquiry support' },
  { value: 50, suffix: '+', label: 'Local partners served' },
]

export const products = [
  {
    name: 'Rice',
    tag: 'Staple grain',
    description: 'Quality rice for homes, shops, and bulk buyers.',
    image: '/assets/images/rice.webp',
  },
  {
    name: 'Beans',
    tag: 'Pulses',
    description: 'Fresh, clean beans ready for retail and wholesale.',
    image: '/assets/images/beans.webp',
  },
  {
    name: 'Maize',
    tag: 'Cereals',
    description: 'Reliable maize supply for cooking, milling, and trade.',
    image: '/assets/images/maize.webp',
  },
  {
    name: 'Flour',
    tag: 'Food products',
    description: 'Everyday flour and related food stock for your shelves.',
    image: '/assets/images/supply4.webp',
  },
  {
    name: 'Cooking Oil',
    tag: 'Food products',
    description: 'Essential cooking oil for households and market sellers.',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Animal Feed',
    tag: 'Agri supply',
    description: 'Agricultural materials and feed to support livestock.',
    image:
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
  },
]

export const services = [
  {
    slug: 'food-retail',
    title: 'Food Products Retail',
    description:
      'Everyday food products sourced with care for shops, households, and community buyers.',
    icon: 'basket',
  },
  {
    slug: 'cereals',
    title: 'Mixed Cereals Wholesale',
    description:
      'Bulk cereal supply with consistent quality for traders and institutional partners.',
    icon: 'wheat',
  },
  {
    slug: 'agri-materials',
    title: 'Agri Materials & Feed',
    description:
      'Raw agricultural materials and animal feed to keep farms and livestock productive.',
    icon: 'seed',
  },
  {
    slug: 'tours',
    title: 'Harvest Tours',
    description:
      'Curated tours including transport, food, accommodation, and local guide support.',
    icon: 'compass',
  },
]

export const works = [
  {
    title: 'Cereal Supply for Local Traders',
    tags: ['Cereals', 'Wholesale'],
    image: '/assets/images/maizesup.webp',
  },
  {
    title: 'Market Food Distribution',
    tags: ['Food Retail', 'Arusha'],
    image: '/assets/images/beans.webp',
  },
  {
    title: 'Farm Feed Partnership',
    tags: ['Animal Feed', 'Agriculture'],
    image:
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Harvest Season Sourcing',
    tags: ['Sourcing', 'Cereals'],
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Community Food Access',
    tags: ['Retail', 'Community'],
    image: '/assets/images/godown.webp',
  },
  {
    title: 'Arusha Agri Network',
    tags: ['Logistics', 'Partners'],
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
  },
]

export const testimonials = [
  {
    name: 'Amina J.',
    role: 'Market trader, Arusha',
    quote:
      'Twiga Harvest keeps our shelves stocked with reliable cereals. Orders arrive on time and the quality is consistent.',
  },
  {
    name: 'Daniel K.',
    role: 'Livestock farmer, Moshono',
    quote:
      'Their animal feed and agricultural materials help our farm stay productive through every season.',
  },
  {
    name: 'Grace M.',
    role: 'Shop owner',
    quote:
      'Friendly service, fair prices, and food products our customers trust. A true Arusha partner.',
  },
]

export const heroSlides = [
  {
    eyebrow: 'Rice · Beans · Maize · Food supply',
    title: 'Quality rice, beans & harvest staples you can stock',
    text: business.description,
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
    primary: { label: "Let's Start", to: '/#about' },
    secondary: { label: 'Our Services', to: '/services' },
  },
  {
    eyebrow: 'Wholesale · Retail · Agri supply',
    title: 'Cereals, food products & farm materials you can rely on',
    text: 'From mixed cereals to everyday food products and animal feed, Twiga Harvest connects growers and buyers with dependable supply.',
    image:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1600&q=80',
    primary: { label: 'Our Services', to: '/services' },
    secondary: { label: 'Contact Us', to: '/contact' },
  },
  {
    eyebrow: 'Based in Moshono, Arusha',
    title: 'Honest harvest. Local roots. Lasting partnerships.',
    text: 'Serving Arusha CBD with food retail, cereal wholesale, and agricultural support you can rely on.',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80',
    primary: { label: 'About Us', to: '/about' },
    secondary: { label: 'Get a Quote', to: '/contact' },
  },
]
