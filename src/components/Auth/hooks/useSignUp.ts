import { useNavigate } from 'react-router-dom'
import { AxiosResponse } from 'axios'
import { UseMutateFunction, useMutation } from '@tanstack/react-query'
import { AuthInfo, SignUpResult } from '@components/Auth/types'
import { authApi } from '@components/Auth/api'
import { tokenKey } from '@components/Auth/constants'

interface SignUpHook {
  signUp: UseMutateFunction<AxiosResponse<SignUpResult>, unknown, AuthInfo>
}

export const useSignUp = (): SignUpHook => {
  const navigate = useNavigate()

  const { mutate } = useMutation<AxiosResponse<SignUpResult>, unknown, AuthInfo>(['auth', 'signUp'], async (authInfo) => await authApi.signUp(authInfo), {
    onSuccess: ({ data }) => {
      sessionStorage.setItem(tokenKey, data.token)
      navigate('/')
    }
  })

  return { signUp: mutate }
}
