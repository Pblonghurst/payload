import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isLogged: Access = ({ req: { user } }) => {
  // make user check
  if (user) {
    // return true
    return Boolean(user)
  }
  return false
}
