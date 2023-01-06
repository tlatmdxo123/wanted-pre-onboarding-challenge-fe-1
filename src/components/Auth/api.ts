import fetcher from '@utils/fetcher'
import { AuthInfo } from '@components/Auth/types'

export const authApi = {
  login: async (payload: AuthInfo) => await fetcher.post('/users/login', payload)
}
