import {Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Donations from '@/components/donations/Donations'

const inter = Open_Sans({ subsets: ['latin'], weight: "300" })

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
        <Donations/>
        <Footer/>
        </body>
    </html>
  )
}
