import Link from 'next/link'
import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default function Header() {
  return (
    <header className="bg-black h-[100px] flex justify-center items-center">
      <div className="flex justify-between items-center text-white my-0 mx-auto px-8 max-w-7xl w-full">
        <Link href="/" className="w-fit text-4xl">
          Header
        </Link>
        <div className="flex gap-6 justify-center items-center">
          <Link href="/events" className="w-fit text-xl hover:underline">
            Events
          </Link>
        </div>
      </div>
    </header>
  )
}
