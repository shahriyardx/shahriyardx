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
  async session({ session, user, token }) {
    if (token.email == "mdshahriyaralam552@gmail.com") {
      session.admin = true
    }
    
    return session
  },
  }
})