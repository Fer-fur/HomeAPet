import { Footer, NavBar } from '@/components'
import { poppins, roboto_flex } from './fonts'
import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from './contexts/AuthContext'

export const metadata: Metadata = {
  title: 'HomeAPet',
  description: 'Adoption and Rehoming made easy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto_flex.variable}`}>
       <AuthProvider>
        <body className='min-h-screen'> 
            <NavBar />
            <div>
              {children}
            </div>
            <Footer />
        </body>
      </AuthProvider>
    </html>
  )
}
