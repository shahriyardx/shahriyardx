import superjson from "superjson"

import type { AppType } from "next/app"
import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast"

import { withTRPC } from "@trpc/next"
import { loggerLink } from "@trpc/client/links/loggerLink"
import { httpBatchLink } from "@trpc/client/links/httpBatchLink"

import type { AppRouter } from "../server"

import "../styles/globals.css"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Toaster />
    </SessionProvider>
  )
}

const getBaseUrl = () => {
  if (typeof window !== "undefined") return "" // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
  config() {
    const url = `${getBaseUrl()}/api/trpc`

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
    }
  },
  ssr: false,
})(MyApp)
