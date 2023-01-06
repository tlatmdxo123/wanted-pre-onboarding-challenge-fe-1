import React, { ForwardRefRenderFunction } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { isNullish } from '@utils/common'

type InputProps = {
  label?: string
  errorMessage?: string
} & UseFormRegisterReturn

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, errorMessage, ...rest }, ref) => {
  return <div>
        {!isNullish(label) && <label>{label}</label>}
        <input {...rest} ref={ref}/>
        {!isNullish(errorMessage) && <p>{errorMessage}</p>}
    </div>
}

export default React.forwardRef(Input)
