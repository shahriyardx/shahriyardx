import { type DefaultSession } from "next-auth";
import { type DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    admin: boolean;
  }
}

declare module "next-auth/JWT" {
  interface JWT extends DefaultJWT {
    admin: boolean;
  }
}
