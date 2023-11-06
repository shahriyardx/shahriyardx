"use client"

import { SessionProvider } from "next-auth/react"
import React from "react"

const WithSession = (Element: React.ComponentType<any>) => {
  return function WrappedComponent(props: Record<string, unknown>) {
    return (
      <SessionProvider>
        <Element {...props} />
      </SessionProvider>
    )
  }
}

export default WithSession
