import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isOwnerOrCreator: Access = ({ req: { user } }) => {
  if (user) {
    if (user.role?.includes('owner')) {
      return true
    }
    return {
      createdBy: {
        equals: user.id,
      },
    }
  }
  return false
}
