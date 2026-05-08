import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, isValidLocale } from '../../../lib/i18n'

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const dict = getDictionary(locale)

  return {
    title: `${dict.legal.termsTitle} — MILICUTE`,
    description: `${dict.legal.termsTitle} MILICUTE official community website.`,
    alternates: {
      canonical: `/${locale}/terms`,
      languages: { id: '/id/terms', en: '/en/terms' },
    },
  }
}

export default async function TermsPage({ params }) {
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
          <h1 className="legal-title">{dict.legal.termsTitle}</h1>
          {dict.legal.termsBody.map((paragraph) => (
            <p key={paragraph} className="legal-copy">{paragraph}</p>
          ))}
        </section>
      </main>
    </>
  )
}
