import React from 'react'
import Link from 'next/link'

// define props/types
type ButtonProps = {
  title: string
  link: string
}

export default function Card({ title, link }: ButtonProps) {
  return (
    <div>
      <div>
        <h2>title</h2>
        <h3>Location</h3>
        <p>Date</p>
        <p>Created By</p>
      </div>
    </div>
  )
}
