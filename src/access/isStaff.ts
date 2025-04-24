import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isStaff: Access = ({ req: { user } }) => {
  // user check
  if (user) {
    // return true if user role includes owner
    return Boolean(user?.role?.includes('staff'))
  }
  return false
}
