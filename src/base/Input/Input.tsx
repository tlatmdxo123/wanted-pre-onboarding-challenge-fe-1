import React, { ForwardRefRenderFunction } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { isNullish } from '@utils/common'

type InputProps = {
  label?: string
} & UseFormRegisterReturn

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, ...rest }, ref) => {
  return <div>
        {!isNullish(label) && <label>{label}</label>}
        <input {...rest} ref={ref}/>
    </div>
}

export default React.forwardRef(Input)
