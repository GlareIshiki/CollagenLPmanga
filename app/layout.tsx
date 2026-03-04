import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _notoSansJP = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' })
const _montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'ぷるりこ（PLULICO）｜低分子コラーゲンペプチド配合ドリンク｜レディコスメ',
  description: '飲むだけで、肌が変わる。低分子コラーゲンペプチド5,000mg配合のコラーゲンドリンク「ぷるりこ」。初回限定50%OFFでお届け。',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#E8739A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${_notoSansJP.variable} ${_montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
