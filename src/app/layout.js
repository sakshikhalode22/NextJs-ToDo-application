import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ToDo',
  description: 'Daily task application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor:"white"}}>{children}</body>
    </html>
  )
}
