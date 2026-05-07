import './globals.css'

export const metadata = {
  metadataBase: new URL('https://milicute.vercel.app'),
  title: 'MILICUTE — Official Community Roblox',
  description: 'MILICUTE official community for Roblox, MILI squad, TikTok highlights, gallery, Discord, and Saweria support.',
  keywords: ['MILICUTE', 'MILI', 'COMMUNITY ROBLOX', 'ROBLOX', 'Milicute Roblox', 'MILI Roblox community'],
  openGraph: {
    title: 'MILICUTE — Official Community Roblox',
    description: 'MILICUTE official community for Roblox, MILI squad, TikTok highlights, gallery, Discord, and Saweria support.',
    images: ['/MILI.png'],
  },
  icons: {
    icon: '/mili_emblem_png.png',
    shortcut: '/mili_emblem_png.png',
    apple: '/mili_emblem_png.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
