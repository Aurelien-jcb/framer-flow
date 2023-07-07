import * as React from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

import { cn } from "@/app/libs/utils"

interface InputProps {
  id: string
  label?: string
  type?: string
  placeholder?: string
  autoCapitalize?: string
  autoComplete?: string
  autoCorrect?: string
  disabled?: boolean
  required?: boolean
  className?: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}
const Input: React.FC<InputProps> = (
  {
    className,
    placeholder,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    required,
    register,
    errors,
    disabled,
    id,
    type = "text",
  }) => {
  return (
    <input
      id={id}
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      autoCorrect={autoCorrect}
      {...register(id, { required })}
      className={cn(
        `flex h-10 w-full rounded-md border border-input bg-transparent px-3  py-2 text-sm shadow-sm ring-offset-background transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-primary-foreground focus:border-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
          errors[id] ? "border-rose-500" : "border-neutral-300"
        }
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}`,
        className
      )}
      // ref={ref}
      // {...props}
    />
  )
}
Input.displayName = "Input"

export { Input }
