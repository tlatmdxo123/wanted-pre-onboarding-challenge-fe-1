import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import Input from '@base/Input'
import { AuthInfo } from '../types'
import { emailRegExp } from '../constants'

interface AuthFormProps {
  onSubmit: (value: AuthInfo) => void
}
const AuthForm: FC<AuthFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState } = useForm<AuthInfo>()

  return (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label='이메일' errorMessage={formState.errors.email?.message} {...register('email', { required: true, pattern: { value: emailRegExp, message: '이메일 형식이 올바르지 않습니다' } })}/>
            <Input label='비밀번호' errorMessage={formState.errors.password?.message} {...register('password', { required: true, minLength: { value: 8, message: '비밀번호는 최소 8자 이상입니다' } })}/>
            <button disabled={!formState.isValid}>회원가입</button>
        </form>
  )
}

export default AuthForm
