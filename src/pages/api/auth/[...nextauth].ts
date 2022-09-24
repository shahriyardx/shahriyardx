import NextAuth, { type NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { env } from "../../../env/server.mjs"
import prisma from "server/prisma"

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, token }) {
      session.admin = token.admin
      return session
    },
    async jwt({ token, user, account }) {
      if (user && account) {
        const data = await prisma.adminUsers.findUnique({
          where: {
            email: user.email as string,
          },
        })

        if (data) {
          token.admin = true
        } else {
          token.admin = false
        }
      }

      return token
    },
  },
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
}

export default NextAuth(authOptions)
