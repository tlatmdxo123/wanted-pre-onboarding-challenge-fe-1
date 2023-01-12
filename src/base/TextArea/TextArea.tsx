import React, { ForwardRefRenderFunction } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { isNullish } from '@utils/common'

type TextAreaProps = {
  label?: string
  errorMessage?: string
} & UseFormRegisterReturn
const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({ label, errorMessage, ...rest }, ref) => {
  return <div>
        {!isNullish(label) && <label>{label}</label>}
        <textarea {...rest} ref={ref}/>
        {!isNullish(errorMessage) && <p>{errorMessage}</p>}
    </div>
}

export default React.forwardRef(TextArea)
