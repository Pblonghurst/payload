import payload from 'payload'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Events } from './collections/Events'
import { Pages } from './collections/Pages'

export default async function seed(payload: any): Promise<void> {
  payload.logger.info('Seeding data...')

  // create owner user
  const owner = await payload.create({
    collection: 'users',
    data: {
      email: 'owner@example.com',
      password: 'changeme',
      role: 'owner',
      name: 'John Smith',
    },
  })

  // create staffOne user
  const staffOne = await payload.create({
    collection: 'users',
    data: {
      email: 'staffOne@example.com',
      password: 'changeme',
      role: 'staff',
      name: 'Jim Smith',
    },
  })

  // create staffTwo user
  const staffTwo = await payload.create({
    collection: 'users',
    data: {
      email: 'staffTwo@example.com',
      password: 'changeme',
      role: 'staff',
      name: 'Jane Smith',
    },
  })

  // create sample events by Owner
  const sampleEvents = [
    { title: 'Launch Party', eventDate: '2025-06-01', location: 'London' },
    { title: 'Summer Workshop', eventDate: '2025-07-15', location: 'Online' },
    { title: 'Christmas', eventDate: '2025-12-25', location: 'London' },
  ]
  for (const creator of sampleEvents) {
    await payload.create({
      collection: 'events',
      data: { ...creator, createdBy: owner.id },
    })
  }

  // create sample events by staffOne
  const sampleEventsTwo = [
    { title: 'Sample 1', eventDate: '2025-07-15', location: 'Online' },
    { title: 'Sample 2', eventDate: '2025-07-15', location: 'Online' },
    { title: 'Sample 3', eventDate: '2025-02-15', location: 'Online' },
  ]
  for (const creator of sampleEventsTwo) {
    await payload.create({
      collection: 'events',
      data: { ...creator, createdBy: staffOne.id },
    })
  }

  // create sample events by staffTwo
  const sampleEventsThree = [
    { title: 'Sample 4', eventDate: '2025-10-14', location: 'Online' },
    { title: 'Sample 5', eventDate: '2025-11-12', location: 'Online' },
  ]
  for (const creator of sampleEventsThree) {
    await payload.create({
      collection: 'events',
      data: { ...creator, createdBy: staffTwo.id },
    })
  }

  console.log('Seeded users and events')
  // Add additional seed data here
}
