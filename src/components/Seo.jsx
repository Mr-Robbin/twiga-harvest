import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { business } from '../data/business'
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
  getPageSeo,
} from '../data/seo'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = getPageSeo(pathname)
    const url = absoluteUrl(pathname)
    const title = page.title
    const description = page.description
    const image = DEFAULT_OG_IMAGE

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', page.keywords)
    upsertMeta('name', 'author', SITE_NAME)
    upsertMeta(
      'name',
      'robots',
      page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    )
    upsertMeta('name', 'theme-color', '#1b5e3b')
    upsertMeta('name', 'geo.region', 'TZ-01')
    upsertMeta('name', 'geo.placename', 'Arusha')

    upsertLink('canonical', url)

    upsertMeta('property', 'og:type', pathname === '/' ? 'website' : 'article')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:locale', 'en_TZ')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:alt', `${SITE_NAME} — rice, beans and food supply`)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)

    upsertJsonLd('ld-organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl('/images/logo.png'),
      email: business.email,
      telephone: business.phoneTel,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address.street,
        addressLocality: business.address.ward,
        addressRegion: business.address.region,
        postalCode: '10118',
        addressCountry: 'TZ',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: business.phoneTel,
        contactType: 'customer service',
        areaServed: 'TZ',
        availableLanguage: ['en', 'sw'],
      },
    })

    upsertJsonLd('ld-localbusiness', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      image: image,
      url: SITE_URL,
      telephone: business.phoneTel,
      email: business.email,
      description: page.description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${business.address.street}, ${business.address.area}`,
        addressLocality: 'Arusha',
        addressRegion: 'Arusha',
        postalCode: '10118',
        addressCountry: 'TZ',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Arusha',
      },
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Rice' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Beans' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Maize' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cereals wholesale' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agricultural materials and animal feed' } },
      ],
    })

    upsertJsonLd('ld-webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url,
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
    })
  }, [pathname])

  return null
}
