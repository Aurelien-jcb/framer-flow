"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Icons } from "@/app/libs/icons"
import { cn } from "@/app/libs/utils"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const callBackUrl = (searchParams?.get("callbackUrl") as string) ?? "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmitForm: SubmitHandler<FieldValues> = (data, event) => {
    event?.preventDefault()
    setIsLoading(true)
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false)

      if (callback?.error) {
        toast.error(callback.error)
      }
      if (callback?.ok && !callback?.error) {
        toast.success("Connexion réussie")
        router.push(callBackUrl)
      }
    })
  }

  //   const handleSubmit = useCallback(() => {
  //   if (disabled) {
  //     return;
  //   }

  //   onSubmit();
  // }, [onSubmit, disabled]);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              label="Email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Mot de passe
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="*******"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              label="Mot de passe"
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.lock className="mr-2 h-4 w-4" />
            )}{" "}
            Connexion
          </Button>
        </div>
      </form>
    </div>
  )
}
