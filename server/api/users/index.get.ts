import { getUsers } from '../../services/users'

export default defineEventHandler(async () => {
  return await getUsers()
})
