import { compare } from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/libs/prisma";

export const authOptions: AuthOptions = {
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
          if (!credentials?.email || !credentials?.password) {
            // throw new Error('Invalid credentials: email or password is missing');
            return null
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          });

          if (!user || !user?.hashedPassword) {
           return null
            // throw new Error('Invalid credentials: user not found or hashed password missing');
          }

          const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

          if (!isCorrectPassword) {
            return null
            // throw new Error('Invalid credentials: incorrect password');
          }

          return user;
        } catch (error) {
          console.error('Error in authorize function:', error);
          return null
          throw new Error('An error occurred during authentication');
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token }) {
      token.isAdmin = true;
      return token;
    },
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
