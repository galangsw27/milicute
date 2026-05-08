import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://milicute.id'),
  icons: {
    icon: '/mili_emblem_png.webp',
    shortcut: '/mili_emblem_png.webp',
    apple: '/mili_emblem_png.webp',
  },
  verification: {
    google: 'fhZGwXQ4B4NhFMiLZakrOGH2R1yFQnRTmRdrUiWen5g',
  },
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
