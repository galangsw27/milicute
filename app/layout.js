import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://milicute.id'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/mili_emblem_png.webp', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-48.png',
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
