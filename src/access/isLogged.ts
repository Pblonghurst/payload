import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isLogged: Access = ({ req: { user } }) => {
  if (user) {
    return Boolean(user)
  }
  return false
}
