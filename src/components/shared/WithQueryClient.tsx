"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

const queryClient = new QueryClient()

const WithQueryClient = (Element: React.ComponentType<any>) => {
  return function WrappedComponent(props: Record<string, unknown>) {
    return (
      <QueryClientProvider client={queryClient}>
        <Element {...props} />
      </QueryClientProvider>
    )
  }
}

export default WithQueryClient
