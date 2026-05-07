import './globals.css'

export const metadata = {
  metadataBase: new URL('https://milicute.vercel.app'),
  title: 'MILICUTE — Official Community Roblox',
  description: 'MILICUTE official community for Roblox, MILI squad, TikTok highlights, gallery, Discord, and Saweria support.',
  keywords: ['MILICUTE', 'MILI', 'COMMUNITY ROBLOX', 'ROBLOX', 'Milicute Roblox', 'MILI Roblox community'],
  openGraph: {
    title: 'MILICUTE — Official Community Roblox',
    description: 'MILICUTE official community for Roblox, MILI squad, TikTok highlights, gallery, Discord, and Saweria support.',
    images: ['/1.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
