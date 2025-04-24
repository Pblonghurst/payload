import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isOwner: FieldAccess = ({ req: { user } }) => {
  if (user) {
    return Boolean(user?.role?.includes('owner'))
  }
  return false
}
