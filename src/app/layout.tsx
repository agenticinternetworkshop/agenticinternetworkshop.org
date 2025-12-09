import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import './globals.css'
import { EventContextProvider } from '@/lib/EventContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist'
})

export const metadata: Metadata = {
  title: 'Agentic Internet Workshop - October 24, 2025',
  description: 'Advancing protocols for how agents connect to each other, people, organizations, services, and things in the agentic web.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable}`}>
        <EventContextProvider>
          {children}
        </EventContextProvider>
      </body>
    </html>
  )
}
