import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import Card from '../../../components/ui/Card'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // fetch events
  const events = (
    await payload.find({
      collection: 'events',
      depth: 1,
      limit: 100,
    })
  ).docs

  return (
    <div className="flex  my-0 mx-auto flex-col p-8 h-[calc(100vh-200px)] max-w-7xl">
      <h1 className="text-4xl pb-12">Events</h1>

      {/* loop through and display events */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {events.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            location={item.location}
            date="{item.date}"
            createdBy="{item.createdBy}"
          />
        ))}
      </div>
    </div>
  )
}
