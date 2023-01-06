import fetcher from '@utils/fetcher'
import { AuthInfo, SignUpResult } from '@components/Auth/types'

export const authApi = {
  login: async (payload: AuthInfo) => await fetcher.post('/users/login', payload),
  signUp: async (payload: AuthInfo) => await fetcher.post<SignUpResult, any>('/users/create', payload)
}
