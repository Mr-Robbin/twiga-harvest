export const SITE_URL = 'https://twigaharvest.co.tz'
export const SITE_NAME = 'Twiga Harvest'
export const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80'

export const seoPages = {
  '/': {
    title: 'Twiga Harvest | Rice, Beans & Food Supply in Arusha, Tanzania',
    description:
      'Twiga Harvest supplies quality rice, beans, maize, cereals, and agricultural materials in Arusha, Tanzania. Retail and wholesale food products you can rely on.',
    keywords:
      'Twiga Harvest, rice Arusha, beans Tanzania, maize, cereals wholesale, food supply Arusha, agricultural materials, animal feed, Moshono',
  },
  '/about': {
    title: 'About Twiga Harvest | Agribusiness in Arusha, Tanzania',
    description:
      'Learn about Twiga Harvest — an Arusha agribusiness supplying rice, beans, food products, mixed cereals, and farm materials across Tanzania.',
    keywords:
      'about Twiga Harvest, Arusha agribusiness, food supplier Tanzania, cereals trader Arusha',
  },
  '/services': {
    title: 'Services | Food Retail, Cereals & Agri Supply — Twiga Harvest',
    description:
      'Twiga Harvest services: food products retail, mixed cereals wholesale, agricultural materials and animal feed, plus harvest tour support in Arusha.',
    keywords:
      'food retail Arusha, cereals wholesale Tanzania, animal feed, agricultural materials, Twiga Harvest services',
  },
  '/gallery': {
    title: 'Gallery | Twiga Harvest Supply & Harvest Work',
    description:
      'See Twiga Harvest work across rice, beans, cereals, food retail, and agricultural supply partnerships in Arusha and beyond.',
    keywords:
      'Twiga Harvest gallery, food supply photos, cereals Arusha, harvest Tanzania',
  },
  '/contact': {
    title: 'Contact Twiga Harvest | Order Rice, Beans & Food Stock',
    description:
      'Contact Twiga Harvest in Arusha for rice, beans, maize, cereals, and agri supply quotes. Call 0717436153 or email info@twigaharvest.co.tz.',
    keywords:
      'contact Twiga Harvest, order rice Arusha, beans wholesale Tanzania, food supplier phone, info@twigaharvest.co.tz',
  },
}

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${clean === '/' ? '/' : clean}`
}

export function getPageSeo(pathname) {
  if (seoPages[pathname]) return seoPages[pathname]

  return {
    title: 'Page Not Found | Twiga Harvest',
    description: 'The page you requested was not found on Twiga Harvest.',
    keywords: 'Twiga Harvest',
    noindex: true,
  }
}
