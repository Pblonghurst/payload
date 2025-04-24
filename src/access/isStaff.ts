import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isStaff: Access = ({ req: { user } }) => {
  if (user) {
    return Boolean(user?.role?.includes('staff'))
  }
  return false
}
