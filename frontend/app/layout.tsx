import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yogibo Admin Control Panel',
  description: 'GCP Infrastructure Management Tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-slate-950 antialiased`}>
        {/* children には app/page.tsx の内容が流し込まれます */}
        {children}
      </body>
    </html>
  )
}
