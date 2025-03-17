// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata = {
  title: 'Physiotherapie Horner-Mitte',
  description: 'Moderne Physiotherapie-Praxis in Ihrer Nähe',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        {/* Navigation */}
        <Navigation />

        {/* Hauptinhalt */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
