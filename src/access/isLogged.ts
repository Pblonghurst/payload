import { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

export const isLogged: Access = ({ req: { user } }) => {
  return Boolean(user)
}
