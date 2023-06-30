import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import prisma from "@/prisma/utils/prisma.ts"
import { signIn } from "@/prisma/utils/users.js"

const authHandler = async (req, res) => {
   await NextAuth(req, res, {
    adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
        async authorize(credentials, req) {
          if (req.method === "POST") {
            try {
              const { user, error } = await signIn(credentials)

              if (error) return null

              return user
            } catch (error) {
              return res.status(500).json({ error: error.message })
            }
          }

          res.setHeader("Allow", ["POST"])
          res.status(405).end(`Method ${req.method} is not allowed.`)
        },
      }),
    ],
    pages: {
      signIn: "/login",
    },
    session: {
      strategy: "jwt", // JSON Web Token
    },
    secret: process.env.NEXTAUTH_SECRET,
  })
}

export default authHandler
