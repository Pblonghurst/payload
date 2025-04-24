import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-black h-[100px] flex justify-center items-center">
      <div className="flex justify-between items-center text-white my-0 mx-auto px-8 max-w-7xl w-full">
        <Link href="/" className="w-fit text-4xl">
          Header
        </Link>
        <div className="flex gap-6 justify-center items-center">
          <Link href="/about" className="w-fit text-1xl">
            About
          </Link>
          <Link href="/events" className="w-fit text-1xl">
            Events
          </Link>
          <Link href="/dashboard" className="w-fit text-1xl">
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  )
}
