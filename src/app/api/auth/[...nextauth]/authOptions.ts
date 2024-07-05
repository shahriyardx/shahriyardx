import type { DefaultSession, NextAuthOptions } from "next-auth"
import type { DefaultJWT } from "next-auth/jwt"
import GithubProvider from "next-auth/providers/github"

type User = {
	id: string
	username: string
	name: string
	email: string
}

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: User
		admin: boolean
	}
}

declare module "next-auth/jwt" {
	interface JWT extends DefaultJWT {
		admin: boolean
		user: User
	}
}

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_APP_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		session({ session, token }) {
			session.admin = token.admin
			session.user = token.user

			return session
		},
		async jwt({ account, user, token }) {
			if (account && user) {
				const github_profile = await fetch(
					`https://api.github.com/user/${token.sub}`,
				).then((response) => response.json())

				const _user = {
					id: token.sub as string,
					username: github_profile.login as string,
					name: github_profile.name as string,
					email: user.email as string,
				}

				token.user = _user

				if (user.email === process.env.ADMIN_EMAIL) {
					token.admin = true
				}
			}

			return token
		},
	},
}
