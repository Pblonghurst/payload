import React from 'react'
import Link from 'next/link'

// define props/types
type ButtonProps = {
  title: string
  link: string
}

export default function Button({ title, link }: ButtonProps) {
  return (
    <Link href={link} passHref>
      <button
        className="px-8 py-4 bg-black text-2xl text-white rounded-2xl hover:bg-primary/90 cursor-pointer hover:bg-sky-600 "
        type="button"
      >
        {title}
      </button>
    </Link>
  )
}
