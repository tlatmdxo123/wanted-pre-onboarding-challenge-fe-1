import React, { FC, useState } from 'react'
import { AuthInfo } from '@components/Auth/types'
import { authType } from '@components/Auth/constants'
import { ValueOf } from '@utils/typeUtils'
import AuthForm from './AuthForm'

const Auth: FC = () => {
  const [authState, setAuthState] = useState<ValueOf<typeof authType>>(authType.signUp)

  const isLogin = authState === authType.login
  const onLogin = (value: AuthInfo): void => { console.log('로그인') }
  const onSignUp = (value: AuthInfo): void => { console.log('회원가입') }

  const handleClick = (): void => { setAuthState(isLogin ? authType.signUp : authType.login) }

  return <div>
    <AuthForm onSubmit={isLogin ? onLogin : onSignUp} btnText={isLogin ? '로그인' : '회원가입'}/>
    <button onClick={handleClick}>{isLogin ? '회원가입하러 가기' : '로그인하러 가기'}</button>
  </div>
}

export default Auth
