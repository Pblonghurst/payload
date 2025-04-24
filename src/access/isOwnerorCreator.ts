import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isOwnerOrCreator: Access = ({ req: { user } }) => {
  // user check
  if (user) {
    // if owner
    if (user.role?.includes('owner')) {
      return true
    }
    // check createdBy == user id
    return {
      createdBy: {
        equals: user.id,
      },
    }
  }
  return false
}
