"use client"

import { Icons } from "@/app/libs/icons"

const Loading = () => {
  return (
    <div className="align-center flex h-[100vh] w-[100%] flex-col justify-center">
      <center>
        <Icons.spinner className="h-10 w-10 animate-spin" />
      </center>
    </div>
  )
}

export default Loading
