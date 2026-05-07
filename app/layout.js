import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.milicute.id'),
  title: 'MILICUTE — Komunitas Roblox Indonesia Resmi',
  description: 'MILICUTE adalah komunitas Roblox Indonesia dengan Discord resmi, group Roblox, highlight TikTok, gallery komunitas, dan update aktivitas member.',
  keywords: ['MILICUTE', 'MILI', 'komunitas Roblox Indonesia', 'community roblox', 'group roblox indonesia', 'Milicute Roblox', 'MILI Roblox community', 'Discord Roblox Indonesia'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MILICUTE — Komunitas Roblox Indonesia Resmi',
    description: 'Gabung komunitas MILICUTE untuk update Roblox, Discord resmi, TikTok highlight, dan gallery komunitas.',
    url: 'https://www.milicute.id/',
    siteName: 'MILICUTE',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: '/MILI.webp',
        width: 1672,
        height: 941,
        alt: 'MILICUTE official community visual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MILICUTE — Komunitas Roblox Indonesia Resmi',
    description: 'Komunitas Roblox Indonesia resmi dengan Discord, group Roblox, TikTok highlight, dan gallery member MILICUTE.',
    images: ['/MILI.webp'],
  },
  icons: {
    icon: '/mili_emblem_png.webp',
    shortcut: '/mili_emblem_png.webp',
    apple: '/mili_emblem_png.webp',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
