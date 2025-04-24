import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'

// define props/types
interface Page {
  id: string
  title: string
}

type HeaderProps = {
  pages: Page[]
}

export default function Header({ pages }: HeaderProps) {
  console.log(pages)
  return (
    <header className="bg-black h-[100px] flex justify-center items-center">
      <div className="flex justify-between items-center text-white my-0 mx-auto px-8 max-w-7xl w-full">
        {/* header link to go home */}
        <Link href="/" className="w-fit text-4xl">
          Header
        </Link>
        <div className="flex gap-6 justify-center items-center">
          {/* events link hardcoded */}
          <Link href="/events" className="w-fit text-xl hover:underline">
            Events
          </Link>
          {/* loop through pages array and return link with page title */}
          {pages.map((item) => (
            <Link key={item.id} href="/events" className="w-fit text-xl hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
