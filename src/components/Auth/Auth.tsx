import React, { FC } from 'react'
import { useAuthState } from '@components/Auth/hooks/useAuthState'
import { useLogin } from '@components/Auth/hooks/useLogin'
import { useSignUp } from '@components/Auth/hooks/useSignUp'
import AuthForm from './AuthForm'

const Auth: FC = () => {
  const { isLogin, changeAuthState } = useAuthState()

  const { login } = useLogin()
  const { signUp } = useSignUp()

  return <div>
    <AuthForm onSubmit={isLogin ? login : signUp} btnText={isLogin ? '로그인' : '회원가입'}/>
    <button onClick={changeAuthState}>{isLogin ? '회원가입하러 가기' : '로그인하러 가기'}</button>
  </div>
}

export default Auth
