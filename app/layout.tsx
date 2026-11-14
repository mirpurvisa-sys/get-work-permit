import type { Metadata } from 'next'
import './globals.css'
import './theme.css'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'GetWorkPermits',
  description: 'Corporate work permit website starter for GetWorkPermits.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="pageShell">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
