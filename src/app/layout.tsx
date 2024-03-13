import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Greg Macbean',
    default: 'Greg Macbean - Software designer, founder, and amateur astronaut',
  },
  description:
    'I’m Greg,  I am a cloud native developer & architect living & working in Sydney, Australia.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full font-serif">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
