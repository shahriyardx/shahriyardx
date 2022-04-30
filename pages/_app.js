import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import AuthWrapper from '../components/Auth/AuthWrapper'
import { wrapper } from '../redux/store'
import { useDispatch } from 'react-redux'
import { setProjects } from '../redux/projects'
import { useEffect } from 'react'
import { API_BASE } from '../utils/api'

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch()
  
  useEffect(() => {
    fetch(`${API_BASE}/projects`)
      .then(response => response.json())
      .then(data => {
        dispatch(setProjects(data))
      })
  }, [dispatch])

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

export default wrapper.withRedux(MyApp)
