import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Skyborne | Technology & Creative Agency',
  description: 'We transform ideas into digital excellence. Web development, mobile apps, branding, and creative solutions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/skybornelogo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/skybornelogo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/skybornelogo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/skybornelogo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
