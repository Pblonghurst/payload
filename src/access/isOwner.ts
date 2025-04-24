import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isOwner: FieldAccess = ({ req: { user } }) => {
  // make user check
  if (user) {
    // return true if user role includes owner
    return Boolean(user?.role?.includes('owner'))
  }
  return false
}
