import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        const data = await fetch(`https://api.github.com/user/${token.sub}`).then(data => data.json())
        token.username = data.login
      }
      return token
    },
    async session({ session, token }) {
      if (token.email == "mdshahriyaralam552@gmail.com") {
        session.admin = true
      }
      session.username = token.username
      return session
    },
  }
})