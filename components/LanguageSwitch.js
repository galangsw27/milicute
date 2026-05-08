'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function LanguageSwitch({ currentLocale, label, short }) {
  useEffect(() => {
    window.localStorage.setItem('preferredLocale', currentLocale)
  }, [currentLocale])

  return (
    <div className="language-switch" aria-label={label}>
      <span className="language-switch-label">{label}</span>
      <div className="language-switch-options">
        {['id', 'en'].map((locale) => {
          const active = locale === currentLocale

          return (
            <Link
              key={locale}
              href={`/${locale}`}
              className={`language-switch-link ${active ? 'is-active' : ''}`}
              aria-current={active ? 'page' : undefined}
            >
              {short[locale]}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
