import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientLayout from './ClientLayout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export { metadata, viewport } from './layout.metadata'

interface LayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}

export default RootLayout