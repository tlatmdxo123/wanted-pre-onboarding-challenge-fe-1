import React, { FC } from 'react'
import { AuthInfo } from '@components/Auth/types'
import { useAuthState } from '@components/Auth/hooks/useAuthState'
import { useLogin } from '@components/Auth/hooks/useLogin'
import AuthForm from './AuthForm'

const Auth: FC = () => {
  const { isLogin, changeAuthState } = useAuthState()

  const { login } = useLogin()
  const onSignUp = (value: AuthInfo): void => { console.log('회원가입') }

  return <div>
    <AuthForm onSubmit={isLogin ? login : onSignUp} btnText={isLogin ? '로그인' : '회원가입'}/>
    <button onClick={changeAuthState}>{isLogin ? '회원가입하러 가기' : '로그인하러 가기'}</button>
  </div>
}

export default Auth
