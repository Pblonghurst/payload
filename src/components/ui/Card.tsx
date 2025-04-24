import React from 'react'
import Link from 'next/link'

// define props/types
type ButtonProps = {
  title: string
  location: string
  date: string
  createdBy: string
}

export default function Card({ title, location, date, createdBy }: ButtonProps) {
  return (
    <div className="shadow-lg rounded-lg p-8">
      <h2 className="text-3xl pb-2">{title}</h2>
      <h3 className="text-2xl pb-16">{location}</h3>
      <p className="text-1xl pb-2">{date}</p>
      <p className="text-1xl">{createdBy}</p>
    </div>
  )
}
