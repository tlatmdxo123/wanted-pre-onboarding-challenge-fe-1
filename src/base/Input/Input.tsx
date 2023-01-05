import React, { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { isNullish } from '../../utils/common'

type InputProps = {
  label?: string
  onChange?: (value: string) => void
} & UseFormRegisterReturn

const Input: FC<InputProps> = ({ label, ...rest }) => {
  return <div>
        {!isNullish(label) && <label>{label}</label>}
        <input {...rest}/>
    </div>
}

export default Input
