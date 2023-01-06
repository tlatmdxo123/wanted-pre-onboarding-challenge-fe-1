import { AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'
import { authApi } from '@components/Auth/api'
import { AuthInfo, AuthSuccessResponse } from '@components/Auth/types'
import { useMutation, UseMutateFunction } from '@tanstack/react-query'
import { tokenKey } from '@components/Auth/constants'

interface LoginHook {
  login: UseMutateFunction<AxiosResponse<AuthSuccessResponse>, unknown, AuthInfo>
}
export const useLogin = (): LoginHook => {
  const navigate = useNavigate()
  const { mutate } = useMutation<AxiosResponse<AuthSuccessResponse>, unknown, AuthInfo>(['auth', 'login'], async (authInfo) => await authApi.login(authInfo), {
    onSuccess: ({ data }) => {
      sessionStorage.setItem(tokenKey, data.token)
      navigate('/')
    }
  })
  return { login: mutate }
}
