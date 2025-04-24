import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isOwnerOrSelf: Access = ({ req: { user } }) => {
  // user check
  if (user) {
    // check if owner
    if (user.role?.includes('owner')) {
      return true
    }
    // else check id == user id
    return {
      id: {
        equals: user.id,
      },
    }
  }
  return false
}
