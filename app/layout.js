import './globals.css'

export const metadata = {
  title: 'MILICUTE — Official Community',
  description: 'MILICUTE official community landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
