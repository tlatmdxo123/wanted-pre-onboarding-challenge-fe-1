import React, { FC } from 'react'
import AuthForm from './AuthForm'
import { AuthInfo } from '@components/Auth/types'

const Auth: FC = () => {
  const onSubmit = (value: AuthInfo): void => { console.log(value) }
  return (<AuthForm onSubmit={onSubmit}/>)
}

export default Auth
