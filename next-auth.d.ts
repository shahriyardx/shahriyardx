import { DefaultSession } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    admin: boolean
  }
}

declare module "next-auth/JWT" {
  interface JWT extends DefaultJWT {
    admin: boolean
  }
}
