import { authApi } from '@components/Auth/api'
import { AuthInfo } from '@components/Auth/types'
import { useMutation, UseMutateFunction } from '@tanstack/react-query'

interface LoginHook {
  login: UseMutateFunction<unknown, unknown, AuthInfo>
}
export const useLogin = (): LoginHook => {
  const { mutate } = useMutation<unknown, unknown, AuthInfo>({
    mutationFn: async (authInfo) => await authApi.login(authInfo)
  })
  return { login: mutate }
}
