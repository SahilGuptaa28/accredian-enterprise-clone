import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
})

export const metadata = {
  title: 'Accredian Enterprise | Transform Your Workforce',
  description: 'Empower your teams with world-class learning programs. Accredian Enterprise delivers cutting-edge upskilling solutions for modern organisations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
