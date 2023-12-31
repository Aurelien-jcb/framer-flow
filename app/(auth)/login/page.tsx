import { Icons } from "@/app/libs/icons"
import { UserAuthForm } from "@/app/components/auth/user-auth-form"
import { siteConfig } from "@/app/config/site"

const Signin = () => {
  return (
    <div className="align-center mx-auto flex flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="my-2 flex justify-center text-2xl font-semibold tracking-tight">
          <Icons.logo className="h-8 w-8" />
          <span className="inline-block text-2xl font-bold text-primary ">
            {siteConfig.name}
          </span>
        </h1>
        <p className="text-sm text-primary">
          Connectez vous afin d'accèder à votre interface utilisateur.
        </p>
      </div>
      <UserAuthForm />
    </div>
  )
}
export default Signin
