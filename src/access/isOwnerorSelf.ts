import { Access, Where, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isOwnerOrSelf: Access = ({ req: { user } }) => {
  if (!user) return false

  if (user.role?.includes('owner')) {
    return true
  }

  return {
    or: [{ id: { equals: user.id } }, { createdBy: { equals: user.id } }],
  } as Where
}
