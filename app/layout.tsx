import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Resemblance',
  description: 'A modern web application',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

