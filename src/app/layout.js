import {Noto_Sans_Hebrew } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Noto_Sans_Hebrew({ subsets: ['hebrew'], weight: "400" })

export const metadata = {
  title: 'תרומה להנצחת מפקדי שלדג',
  description: 'הנצחת מפקדי יחידת שלדג',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
