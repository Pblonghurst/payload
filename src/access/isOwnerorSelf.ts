import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isOwnerOrSelf: Access = ({ req: { user } }) => {
  if (user) {
    if (user.role?.includes('owner')) {
      return true
    }
    return {
      id: {
        equals: user.id,
      },
    }
  }
  return false
}
