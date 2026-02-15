import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Marzstack Portfolio',
  description: 'Product Manager & Full-Stack Developer - Building scalable web solutions',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon/favicon.ico',
      },
    ],
    apple: '/favicon/favicon.ico',
  },
}

import Header from "@/components/header"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import Chatbot from "@/components/chatbot"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Chatbot />
        <Analytics />
      </body>
    </html>
  )
}
