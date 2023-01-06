import { AxiosResponse } from 'axios'
import { UseMutateFunction, useMutation } from '@tanstack/react-query'
import { AuthInfo, AuthSuccessResponse } from '@components/Auth/types'
import { authApi } from '@components/Auth/api'

interface SignUpHook {
  signUp: UseMutateFunction<AxiosResponse<AuthSuccessResponse>, unknown, AuthInfo>
}

export const useSignUp = (): SignUpHook => {
  const { mutate } = useMutation<AxiosResponse<AuthSuccessResponse>, unknown, AuthInfo>(['auth', 'signUp'], async (authInfo) => await authApi.signUp(authInfo))

  return { signUp: mutate }
}
