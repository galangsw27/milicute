import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, isValidLocale } from '../../../lib/i18n'

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const dict = getDictionary(locale)

  return {
    title: `${dict.legal.privacyTitle} — MILICUTE`,
    description: `${dict.legal.privacyTitle} MILICUTE official community website.`,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { id: '/id/privacy', en: '/en/privacy' },
    },
  }
}

export default async function PrivacyPage({ params }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const dict = getDictionary(locale)

  return (
    <>
      <div className="bg-orb orb-a"></div>
      <div className="bg-orb orb-b"></div>
      <main className="page legal-page">
        <section className="legal-card">
          <Link className="legal-back" href={`/${locale}`}>← MILICUTE</Link>
          <h1 className="legal-title">{dict.legal.privacyTitle}</h1>
          {dict.legal.privacyBody.map((paragraph) => (
            <p key={paragraph} className="legal-copy">{paragraph}</p>
          ))}
        </section>
      </main>
    </>
  )
}
