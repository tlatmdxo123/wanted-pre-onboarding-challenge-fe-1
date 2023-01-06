import fetcher from '@utils/fetcher'
import { AuthInfo, AuthSuccessResponse } from '@components/Auth/types'

export const authApi = {
  login: async (payload: AuthInfo) => await fetcher.post<AuthSuccessResponse, any>('/users/login', payload),
  signUp: async (payload: AuthInfo) => await fetcher.post<AuthSuccessResponse, any>('/users/create', payload)
}
