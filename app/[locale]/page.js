import { notFound } from 'next/navigation'
import GallerySection from '../../components/GallerySection'
import LanguageSwitch from '../../components/LanguageSwitch'
import { getDictionary, isValidLocale } from '../../lib/i18n'

const actionLinks = [
  ['https://discord.gg/gYdXg6uQ3M', 'Join Discord', ['Masuk server utama MILICUTE buat ngobrol, update, dan event komunitas.', 'Enter the main MILICUTE server for chat, updates, and community events.'], 'Open Discord'],
  ['https://www.roblox.com/share/g/858803229', ['Join Community Roblox', 'Join Roblox Community'], ['Gabung group Roblox resmi untuk aktivitas game dan circle member.', 'Join the official Roblox group for game activity and member circles.'], 'Open Roblox Group'],
  ['https://saweria.co/milicuteofficial', 'Support on Saweria', ['Dukung perkembangan komunitas dan project MILICUTE lewat Saweria.', 'Support MILICUTE community growth and projects through Saweria.'], 'Open Saweria'],
  ['https://discord.com/users/1426195958688911474', 'Contact Us', ['Hubungi admin MILICUTE lewat Discord untuk add friend dan info komunitas.', 'Contact the MILICUTE admin on Discord for friend requests and community info.'], 'Open Discord Profile'],
]

const tiktokVideos = ['7608502441935490324', '7614323871549869333', '7615864179416780052']

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const dict = getDictionary(locale)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { id: '/id', en: '/en' },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://milicute.id/${locale}`,
      siteName: 'MILICUTE',
      type: 'website',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      images: [{ url: '/MILI.webp', width: 1672, height: 941, alt: 'MILICUTE official community visual' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/MILI.webp'],
    },
  }
}

function buildStructuredData(locale, dict) {
  const isId = locale === 'id'
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', name: 'MILICUTE', url: `https://milicute.id/${locale}`, logo: 'https://milicute.id/mili_emblem_png.webp', sameAs: ['https://discord.gg/gYdXg6uQ3M', 'https://www.roblox.com/share/g/858803229', 'https://www.tiktok.com/@milicuteofficial', 'https://saweria.co/milicuteofficial'] },
      { '@type': 'WebSite', name: 'MILICUTE', url: `https://milicute.id/${locale}`, description: dict.meta.description, inLanguage: dict.htmlLang },
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: isId ? 'Apa itu MILICUTE?' : 'What is MILICUTE?', acceptedAnswer: { '@type': 'Answer', text: dict.hero.about } },
        { '@type': 'Question', name: isId ? 'Bagaimana cara join komunitas MILICUTE?' : 'How do I join MILICUTE?', acceptedAnswer: { '@type': 'Answer', text: isId ? 'Join lewat Discord resmi dan Roblox group di halaman ini.' : 'Join through the official Discord and Roblox group on this page.' } },
      ] },
    ],
  }
}

export default async function LocalizedPage({ params }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const dict = getDictionary(locale)
  const isId = locale === 'id'
  const structuredData = buildStructuredData(locale, dict)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="bg-orb orb-a"></div>
      <div className="bg-orb orb-b"></div>
      <main className="page">
        <section className="hero">
          <LanguageSwitch currentLocale={locale} label={dict.switchLabel} short={dict.switchShort} />
          <div className="badge">{dict.hero.badge}</div>
          <h1>{dict.hero.title}</h1>
          <p className="tagline">{dict.hero.tagline}</p>
          <p className="about">{dict.hero.about}</p>
        </section>

        <section className="actions" aria-label="Main actions">
          {actionLinks.map(([href, title, desc, link]) => (
            <a key={href} className="action-card" href={href} target="_blank" rel="noopener noreferrer">
              <div className="action-title">{Array.isArray(title) ? title[isId ? 0 : 1] : title}</div>
              <div className="action-desc">{desc[isId ? 0 : 1]}</div>
              <div className="action-link">{link}</div>
              <img className="action-logo" src="/mili_emblem_png.webp" alt="MILICUTE logo" />
            </a>
          ))}
        </section>

        <section className="featured-shot" aria-label="MILICUTE featured image">
          <img src="/1.jpg" alt="MILICUTE community hero photo" />
          <div className="featured-overlay"><div className="featured-copy"><div className="featured-kicker">MINI SQUAD BUT WE DOMINATED</div></div></div>
        </section>

        <section className="tiktok" aria-label="MILICUTE TikTok videos">
          <div className="tiktok-grid">
            {tiktokVideos.map((id) => (
              <article key={id} className="tiktok-card"><div className="tiktok-frame"><iframe src={`https://www.tiktok.com/embed/v2/${id}?background=transparent`} title={`MILICUTE TikTok ${id}`} loading="lazy" allow="encrypted-media; fullscreen" scrolling="no" allowFullScreen></iframe></div></article>
            ))}
          </div>
        </section>

        <GallerySection locale={locale} />

        <section className="seo-block" aria-label={dict.seo.aboutTitle}>
          <h2 className="seo-title">{dict.seo.aboutTitle}</h2>
          <p className="seo-copy">{isId ? 'MILICUTE adalah komunitas Roblox Indonesia untuk player yang suka teamwork, event komunitas, showcase member, dan update konten kreatif.' : 'MILICUTE is a Roblox community for players who enjoy teamwork, community events, member showcases, and creative updates.'}</p>
          <p className="seo-copy">{isId ? 'Jika kamu cari komunitas Roblox Indonesia yang aktif dan punya identitas kuat, MILICUTE jadi titik mulai paling cepat untuk join.' : 'If you are looking for an active Roblox community with a strong identity, MILICUTE is a fast place to start.'}</p>
        </section>

        <section className="seo-block" aria-label={dict.seo.faqTitle}>
          <h2 className="seo-title">{dict.seo.faqTitle}</h2>
          <div className="faq-list">
            <article className="faq-item"><h3>{isId ? 'Bagaimana cara join komunitas MILICUTE?' : 'How do I join MILICUTE?'}</h3><p>{isId ? 'Join lewat tombol Discord dan Roblox Group di halaman ini.' : 'Use the Discord and Roblox Group buttons on this page.'}</p></article>
            <article className="faq-item"><h3>{isId ? 'Apa bedanya MILICUTE dengan komunitas Roblox lain?' : 'What makes MILICUTE different?'}</h3><p>{isId ? 'MILICUTE menggabungkan konsep cute tactical dengan struktur komunitas yang rapi.' : 'MILICUTE combines a cute tactical concept with a clear community structure.'}</p></article>
          </div>
        </section>

        <footer>{dict.footer}</footer>
      </main>
    </>
  )
}
