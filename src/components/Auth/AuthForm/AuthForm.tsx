import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import Input from '@base/Input'
import { AuthInfo } from '@components/Auth/types'

interface AuthFormProps {
  onSubmit: (value: AuthInfo) => void
}
const AuthForm: FC<AuthFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<AuthInfo>()

  return (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('email')}/>
            <Input {...register('password')}/>
            <button>회원가입</button>
        </form>
  )
}

export default AuthForm
