import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import AuthWrapper from '../components/Auth/AuthWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      {Component.requireAuth ? (
        <AuthWrapper>
          <Component {...pageProps} />
          </AuthWrapper>
        ) : (
          <Component {...pageProps} />
        )}
    </SessionProvider>
  )
}

export default MyApp
