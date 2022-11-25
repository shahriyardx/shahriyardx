import Flex from "components/shared/Flex"
import React, { type HTMLInputTypeAttribute } from "react"

type Props = {
  title: string
  placeholder?: string
  required?: boolean
  type?: HTMLInputTypeAttribute
  id?: string
  error?: string
  children?: React.ReactNode | React.ReactNode[]
}

const LabeledInput = ({
  title,
  placeholder,
  required,
  type,
  id,
  error,
  children,
}: Props) => {
  return (
    <Flex column className="gap-2">
      <label className="flex items-center gap-1" htmlFor={id}>
        {title} {required && <span className="text-sm text-red-500">*</span>}
      </label>
      {children ? (
        children
      ) : (
        <input id={id} type={type} placeholder={placeholder} />
      )}
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </Flex>
  )
}

export default LabeledInput
