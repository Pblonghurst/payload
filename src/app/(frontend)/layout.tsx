import React from 'react'
import './styles.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import config from '@/payload.config'
import { getPayload } from 'payload'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
