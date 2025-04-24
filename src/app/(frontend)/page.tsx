import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import Button from '@/components/ui/Button'
import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="flex justify-center my-0 mx-auto flex-col p-8 h-[calc(100vh-200px)] max-w-7xl">
      <div className="content">
        <div className="pb-12">
          {!user && <h1 className="text-4xl md:text-7xl">Welcome to your new project.</h1>}
          {user && <h1 className="text-4xl md:text-7xl">Welcome back, {user.email}</h1>}
        </div>
        <p className="text-xl pb-12">
          Navigate to the admin panel below, or click on events in the to see all events displayed
          in a grid, thanks!
        </p>
        <div className="links">
          <Button title="Go to Admin" link={payloadConfig.routes.admin} />
        </div>
      </div>
    </div>
  )
}
