import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isStaff: Access = ({ req: { user } }) => {
  return Boolean(user?.role?.includes('staff'))
}
