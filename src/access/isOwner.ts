import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isOwner: Access = ({ req: { user } }) => {
  return Boolean(user?.role?.includes('owner'))
}
