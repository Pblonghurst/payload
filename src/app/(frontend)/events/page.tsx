import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'

export default async function HomePage() {
  return (
    <div className="flex  my-0 mx-auto flex-col p-8 h-[calc(100vh-200px)] max-w-7xl">
      <h1 className="text-3xl">Events</h1>
    </div>
  )
}
