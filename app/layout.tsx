import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import SessionProvider from '@/app/context/SessionProvider'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Starter',
  description: 'Generator of apps'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <SessionProvider>
        <body className={rubik.className}>{children}</body>
      </SessionProvider>
    </html>
  )
}
