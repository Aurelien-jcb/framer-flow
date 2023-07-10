import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/libs/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          if (!credentials || !credentials?.email || !credentials?.password) {
            throw new Error('Invalid credentials: email or password is missing');
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          });

          if (!user || !user?.hashedPassword) {
            throw new Error('Invalid credentials: user not found or hashed password missing');
          }

          const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

          if (!isCorrectPassword) {
            throw new Error('Invalid credentials: incorrect password');
          }

          return user as User;

        } catch (error) {
          console.error('Error in authorize function:', error);
          throw new Error('An error occurred during authentication');
        }
      }
    })
  ],
  // callbacks: {
  //   jwt: ({ token, user }) => {
  //     if (user) {
  //       token.id = user.id;
  //     }

  //     return token;
  //   },
  //   async session({ session, token }) {
  //     if (token) {
  //       session.id = token.id;
  //     }

  //     return session;
  //   },
  // },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  },
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
