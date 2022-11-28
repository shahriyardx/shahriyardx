import type { AppType } from "next/app"
import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast"

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

export default MyApp